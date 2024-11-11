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
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Define createBook function to insert a new book into the database
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = yield prisma_1.default.member.create({
        data: payload,
    });
    return newBook;
});
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
exports.UserService = {
    createUser,
    //   getAllBooks,
    //   getSingleBooks,
    //   updateBook,
    //   deleteBook,
};
