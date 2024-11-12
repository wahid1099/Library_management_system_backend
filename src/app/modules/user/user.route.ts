import { MemberValidationSchema } from "./user.validation.schema";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";

import express from "express";

const router = express.Router();

// GET all user
router.get("/", UserController.getAllUsersfromDb);

// GET a single user by ID
router.get("/:userId", UserController.getSingleUserfromDb);

// POST a new user
router.post(
  "/",
  validateRequest(MemberValidationSchema.UserSchemaCreate),
  UserController.inserUserIntoDB
);

// PUT (update) an existing book by ID
router.put("/:userId", UserController.updateUserIntoDb);

// DELETE a book by ID
router.delete("/:userId", UserController.deleteUserfromDb);

export const UserRoutes = router;
