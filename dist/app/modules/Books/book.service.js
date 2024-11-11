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
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Define createBook function to insert a new book into the database
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = yield prisma_1.default.book.create({
        data: payload,
    });
    return newBook;
});
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield prisma_1.default.book.findMany();
    return books;
});
const getSingleBooks = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: { bookId: bookId },
    });
    return book;
});
const updateBook = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, genre, publishedYear, totalCopies, availableCopies } = payload;
    const updatedBook = yield prisma_1.default.book.update({
        where: { bookId: bookId },
        data: {
            title,
            genre,
            publishedYear,
            totalCopies,
            availableCopies,
        },
    });
    return updatedBook;
});
const deleteBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: { bookId: bookId },
    });
    return result;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBooks,
    updateBook,
    deleteBook,
};
