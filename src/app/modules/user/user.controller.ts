import { UserService } from "./user.service";
import { Request, Response } from "express";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const inserUserIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Member created successfully",
    data: result,
  });
});

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

export const UserController = {
  inserUserIntoDB,
  //   getAllBooksfromDb,
  //   getSingleBookfromDb,
  //   updateBookIntoDb,
  //   deleteBookfromDb,
};
