"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
// Define createBorrowBook function to insert a new book into the database
const createBorrowBook = (bookId, memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: { bookId },
    });
    if (!book) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Book not found");
    }
    if (book.availableCopies < 1) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Book is not available for borrowing");
    }
    const memeber = yield prisma_1.default.member.findUnique({
        where: { memberId },
    });
    if (!memeber) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Member not found");
    }
    yield prisma_1.default.book.update({
        where: { bookId },
        data: { availableCopies: { decrement: 1 } },
    });
    const borrowRecord = yield prisma_1.default.borrowRecord.create({
        data: {
            bookId,
            memberId,
            borrowDate: new Date(),
        },
    });
    return borrowRecord;
});
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowRecord = yield prisma_1.default.borrowRecord.findUnique({
        where: { borrowId },
    });
    if (!borrowRecord) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Borrow record not found");
    }
    yield prisma_1.default.book.update({
        where: { bookId: borrowRecord.bookId },
        data: { availableCopies: { increment: 1 } },
    });
    yield prisma_1.default.borrowRecord.update({
        where: { borrowId },
        data: { returnDate: new Date() },
    });
});
const getOverdueBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const overdueBooks = yield prisma_1.default.borrowRecord.findMany({
        where: {
            borrowDate: {
                lt: fourteenDaysAgo,
            },
            returnDate: null,
        },
        include: {
            book: {
                select: {
                    title: true,
                },
            },
            member: {
                select: {
                    name: true,
                },
            },
        },
    });
    return overdueBooks.map((borrow) => {
        const overdueDays = Math.max(0, Math.floor((new Date().getTime() - new Date(borrow.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24)) - 14);
        return {
            borrowId: borrow.borrowId,
            bookTitle: borrow.book.title,
            borrowerName: borrow.member.name,
            overdueDays,
        };
    });
});
exports.BorrowService = {
    createBorrowBook,
    returnBook,
    getOverdueBooks,
};
