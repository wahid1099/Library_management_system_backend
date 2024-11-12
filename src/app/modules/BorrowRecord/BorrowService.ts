import { BorrowRecord } from "./borrow.interface";
import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

// Define createBorrowBook function to insert a new book into the database
const createBorrowBook = async (
  bookId: string,
  memberId: string
): Promise<BorrowRecord> => {
  const book = await prisma.book.findUnique({
    where: { bookId },
  });

  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
  }

  if (book.availableCopies < 1) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Book is not available for borrowing"
    );
  }
  const memeber = await prisma.member.findUnique({
    where: { memberId },
  });

  if (!memeber) {
    throw new ApiError(httpStatus.NOT_FOUND, "Member not found");
  }

  await prisma.book.update({
    where: { bookId },
    data: { availableCopies: { decrement: 1 } },
  });
  const borrowRecord = await prisma.borrowRecord.create({
    data: {
      bookId,
      memberId,
      borrowDate: new Date(),
    },
  });
  return borrowRecord;
};

const returnBook = async (borrowId: string) => {
  const borrowRecord = await prisma.borrowRecord.findUnique({
    where: { borrowId },
  });

  if (!borrowRecord) {
    throw new ApiError(httpStatus.NOT_FOUND, "Borrow record not found");
  }

  await prisma.book.update({
    where: { bookId: borrowRecord.bookId },
    data: { availableCopies: { increment: 1 } },
  });

  await prisma.borrowRecord.update({
    where: { borrowId },
    data: { returnDate: new Date() },
  });
};

const getOverdueBooks = async () => {
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  const overdueBooks = await prisma.borrowRecord.findMany({
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
    const overdueDays = Math.max(
      0,
      Math.floor(
        (new Date().getTime() - new Date(borrow.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14
    );

    return {
      borrowId: borrow.borrowId,
      bookTitle: borrow.book.title,
      borrowerName: borrow.member.name,
      overdueDays,
    };
  });
};

export const BorrowService = {
  createBorrowBook,
  returnBook,
  getOverdueBooks,
};
