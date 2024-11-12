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
exports.BorrowBookController = void 0;
const BorrowService_1 = require("./BorrowService");
const SendResponse_1 = __importDefault(require("../../../shared/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const BorrowBookIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = req.body;
    const result = yield BorrowService_1.BorrowService.createBorrowBook(bookId, memberId);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Book borrowed successfully",
        data: result,
    });
}));
const returnBookIntoDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    const result = yield BorrowService_1.BorrowService.returnBook(borrowId);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Book returned successfully",
        data: result,
    });
}));
const getOverdueBorrowList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const overdueList = yield BorrowService_1.BorrowService.getOverdueBooks();
    const message = overdueList.length > 0 ? "Overdue borrow list fetched" : "No overdue books";
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message,
        data: overdueList,
    });
}));
exports.BorrowBookController = {
    BorrowBookIntoDB,
    returnBookIntoDb,
    getOverdueBorrowList,
};
