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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const SendResponse_1 = __importDefault(require("../../../shared/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const inserUserIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.createUser(req.body);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Member created successfully",
        data: result,
    });
}));
// const getAllBooksfromDb = catchAsync(async (req: Request, res: Response) => {
//   const result = await BookService.getAllBooks();
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "Books retrieved successfully",
//     data: result,
//   });
// });
// const getSingleBookfromDb = catchAsync(async (req: Request, res: Response) => {
//   const { bookId } = req.params;
//   const result = await BookService.getSingleBooks(bookId);
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "Books retrieved successfully",
//     data: result,
//   });
// });
// const updateBookIntoDb = async (req: Request, res: Response) => {
//   const { bookId } = req.params;
//   const result = await BookService.updateBook(bookId, req.body);
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "Book updated successfully",
//     data: result,
//   });
// };
// const deleteBookfromDb = async (req: Request, res: Response) => {
//   const { bookId } = req.params;
//   const result = await BookService.deleteBook(bookId);
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "Book successfully deleted",
//   });
// };
exports.UserController = {
    inserUserIntoDB,
    //   getAllBooksfromDb,
    //   getSingleBookfromDb,
    //   updateBookIntoDb,
    //   deleteBookfromDb,
};
