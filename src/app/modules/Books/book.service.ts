import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";
import { TBook, TBookUpdate } from "./Book.interface";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

// Define createBook function to insert a new book into the database
const createBook = async (payload: Prisma.BookCreateInput): Promise<TBook> => {
  const newBook = await prisma.book.create({
    data: payload,
  });
  return newBook;
};

const getAllBooks = async () => {
  const books = await prisma.book.findMany();

  return books;
};

const getSingleBooks = async (bookId: string) => {
  const book = await prisma.book.findUnique({
    where: { bookId: bookId },
  });
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
  }
  return book;
};

const updateBook = async (
  bookId: string,
  payload: Partial<TBookUpdate>
): Promise<TBook> => {
  const { title, genre, publishedYear, totalCopies, availableCopies } = payload;

  const updatedBook = await prisma.book.update({
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
};

const deleteBook = async (bookId: string) => {
  const book = await prisma.book.findUnique({
    where: { bookId: bookId },
  });
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
  }
  const result = await prisma.book.delete({
    where: { bookId: bookId },
  });

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBooks,
  updateBook,
  deleteBook,
};
