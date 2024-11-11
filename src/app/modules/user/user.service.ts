import { TMember, TMemberUpdate } from "./user.interface";
import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";

// Define createBook function to insert a new book into the database
const createUser = async (
  payload: Prisma.MemberCreateInput
): Promise<TMember> => {
  const newBook = await prisma.member.create({
    data: payload,
  });
  return newBook;
};

// const getAllBooks = async () => {
//   const books = await prisma.book.findMany();
//   return books;
// };

// const getSingleBooks = async (bookId: string) => {
//   const book = await prisma.book.findUnique({
//     where: { bookId: bookId },
//   });
//   return book;
// };

// const updateBook = async (
//   bookId: string,
//   payload: Partial<TBookUpdate>
// ): Promise<TBook> => {
//   const { title, genre, publishedYear, totalCopies, availableCopies } = payload;
//   const updatedBook = await prisma.book.update({
//     where: { bookId: bookId },
//     data: {
//       title,
//       genre,
//       publishedYear,
//       totalCopies,
//       availableCopies,
//     },
//   });
//   return updatedBook;
// };

// const deleteBook = async (bookId: string) => {
//   const result = await prisma.book.delete({
//     where: { bookId: bookId },
//   });

//   return result;
// };

export const UserService = {
  createUser,
  //   getAllBooks,
  //   getSingleBooks,
  //   updateBook,
  //   deleteBook,
};
