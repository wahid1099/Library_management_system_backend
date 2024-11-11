import validateRequest from "../../middlewares/validateRequest";
import { BookController } from "./book.controller";
import express from "express";
import { BookValidationSchema } from "./book.validation";

const router = express.Router();
router.get("/", BookController.getAllBooksfromDb);
router.get("/:bookId", BookController.getSingleBookfromDb);
router.post(
  "/",
  validateRequest(BookValidationSchema.BookSchemaCreate),
  BookController.inserBookIntoDB
);

export const BookRoutes = router;
