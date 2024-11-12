import { BorrowService } from "./BorrowService";
import { Request, Response } from "express";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const BorrowBookIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { bookId, memberId } = req.body;
  const result = await BorrowService.createBorrowBook(bookId, memberId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});

const returnBookIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { borrowId } = req.body;
  const result = await BorrowService.returnBook(borrowId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book returned successfully",
    data: result,
  });
});

const getOverdueBorrowList = catchAsync(async (req: Request, res: Response) => {
  const overdueList = await BorrowService.getOverdueBooks();
  const message =
    overdueList.length > 0 ? "Overdue borrow list fetched" : "No overdue books";

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message,
    data: overdueList,
  });
});
export const BorrowBookController = {
  BorrowBookIntoDB,
  returnBookIntoDb,
  getOverdueBorrowList,
};
