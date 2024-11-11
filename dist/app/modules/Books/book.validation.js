"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidationSchema = void 0;
const zod_1 = require("zod");
// Book creation validation schema (all fields are required)
const BookSchemaCreate = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    genre: zod_1.z.string().min(1, "Genre is required"),
    publishedYear: zod_1.z.number().int().min(1000, "Invalid year").max(9999),
    totalCopies: zod_1.z.number().int().positive(),
    availableCopies: zod_1.z.number().int().nonnegative(),
});
// Book update validation schema (most fields optional)
const BookSchemaUpdate = zod_1.z.object({
    bookId: zod_1.z.string().uuid(), // `bookId` might be required to identify the record
    title: zod_1.z.string().min(1).optional(),
    genre: zod_1.z.string().min(1).optional(),
    publishedYear: zod_1.z.number().int().min(1000).max(9999).optional(),
    totalCopies: zod_1.z.number().int().positive().optional(),
    availableCopies: zod_1.z.number().int().nonnegative().optional(),
});
exports.BookValidationSchema = {
    BookSchemaCreate,
    BookSchemaUpdate,
};
