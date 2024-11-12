import { z } from "zod";

const BorrowRecordSchemaCreate = z.object({
  borrowDate: z.date(),
  returnDate: z.date().nullable().optional(),
  bookId: z.string().uuid(),
  memberId: z.string().uuid(),
});

// BorrowRecord update validation schema (most fields optional)
const BorrowRecordSchemaUpdate = z.object({
  borrowId: z.string().uuid(),
  borrowDate: z.date().optional(),
  returnDate: z.date().nullable().optional(),
  bookId: z.string().uuid().optional(),
  memberId: z.string().uuid().optional(),
});

export const BorrowRecordValidationSchema = {
  BorrowRecordSchemaCreate,
  BorrowRecordSchemaUpdate,
};
