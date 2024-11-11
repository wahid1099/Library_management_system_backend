import { z } from "zod";

// Book creation validation schema (all fields are required)
const BookSchemaCreate = z.object({
  title: z.string().min(1, "Title is required"),
  genre: z.string().min(1, "Genre is required"),
  publishedYear: z.number().int().min(1000, "Invalid year").max(9999),
  totalCopies: z.number().int().positive(),
  availableCopies: z.number().int().nonnegative(),
});

// Book update validation schema (most fields optional)
const BookSchemaUpdate = z.object({
  bookId: z.string().uuid(), // `bookId` might be required to identify the record
  title: z.string().min(1).optional(),
  genre: z.string().min(1).optional(),
  publishedYear: z.number().int().min(1000).max(9999).optional(),
  totalCopies: z.number().int().positive().optional(),
  availableCopies: z.number().int().nonnegative().optional(),
});

export const BookValidationSchema = {
  BookSchemaCreate,
  BookSchemaUpdate,
};
