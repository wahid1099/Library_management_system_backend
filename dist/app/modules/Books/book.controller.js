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
exports.BookController = void 0;
const SendResponse_1 = __importDefault(require("../../../shared/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const book_service_1 = require("./book.service");
const inserBookIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield book_service_1.BookService.createBook(req.body);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Book Created Successfully",
        data: result,
    });
}));
const getAllBooksfromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getAllBooks();
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Books retrieved successfully",
        data: result,
    });
}));
const getSingleBookfromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.getSingleBooks(bookId);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Books retrieved successfully",
        data: result,
    });
}));
const updateBookIntoDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.updateBook(bookId, req.body);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Book updated successfully",
        data: result,
    });
});
const deleteBookfromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.deleteBook(bookId);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Book successfully deleted",
    });
});
exports.BookController = {
    inserBookIntoDB,
    getAllBooksfromDb,
    getSingleBookfromDb,
    updateBookIntoDb,
    deleteBookfromDb,
};
