import { Request, Response } from "express";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { BookService } from "./book.service";

const inserBookIntoDB = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await BookService.createBook(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Book Created Successfully",
    data: result,
  });
});

const getAllBooksfromDb = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getSingleBookfromDb = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.getSingleBooks(bookId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Books retrieved successfully",
    data: result,
  });
});

const updateBookIntoDb = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.updateBook(bookId, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book updated successfully",
    data: result,
  });
};

const deleteBookfromDb = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.deleteBook(bookId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book successfully deleted",
  });
};

export const BookController = {
  inserBookIntoDB,
  getAllBooksfromDb,
  getSingleBookfromDb,
  updateBookIntoDb,
  deleteBookfromDb,
};
