import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";
import { TBook } from "./Book.interface";

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
  return book;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBooks,
};
