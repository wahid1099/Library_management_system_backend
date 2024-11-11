import { MemberValidationSchema } from "./user.validation.schema";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";

import express from "express";

const router = express.Router();

// GET all books
// router.get("/", BookController.getAllBooksfromDb);

// // GET a single book by ID
// router.get("/:bookId", BookController.getSingleBookfromDb);

// POST a new user
router.post(
  "/",
  validateRequest(MemberValidationSchema.UserSchemaCreate),
  UserController.inserUserIntoDB
);

// // PUT (update) an existing book by ID
// router.put("/:bookId", BookController.updateBookIntoDb);

// // DELETE a book by ID
// router.delete("/:bookId", BookController.deleteBookfromDb);

export const UserRoutes = router;
