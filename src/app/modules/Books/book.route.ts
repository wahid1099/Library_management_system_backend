import validateRequest from "../../middlewares/validateRequest";
import { BookController } from "./book.controller";
import express from "express";
import { BookValidationSchema } from "./book.validation";

const router = express.Router();

// GET all books
router.get("/", BookController.getAllBooksfromDb);

// GET a single book by ID
router.get("/:bookId", BookController.getSingleBookfromDb);

// POST a new book
router.post(
  "/",
  validateRequest(BookValidationSchema.BookSchemaCreate),
  BookController.inserBookIntoDB
);

// PUT (update) an existing book by ID
router.put("/:bookId", BookController.updateBookIntoDb);

// DELETE a book by ID
router.delete("/:bookId", BookController.deleteBookfromDb);

export const BookRoutes = router;
