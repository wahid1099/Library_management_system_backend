"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordValidationSchema = void 0;
const zod_1 = require("zod");
const BorrowRecordSchemaCreate = zod_1.z.object({
    borrowId: zod_1.z.string().uuid(),
    borrowDate: zod_1.z.date(),
    returnDate: zod_1.z.date().nullable().optional(),
    bookId: zod_1.z.string().uuid(),
    memberId: zod_1.z.string().uuid(),
});
// BorrowRecord update validation schema (most fields optional)
const BorrowRecordSchemaUpdate = zod_1.z.object({
    borrowId: zod_1.z.string().uuid(),
    borrowDate: zod_1.z.date().optional(),
    returnDate: zod_1.z.date().nullable().optional(),
    bookId: zod_1.z.string().uuid().optional(),
    memberId: zod_1.z.string().uuid().optional(),
});
exports.BorrowRecordValidationSchema = {
    BorrowRecordSchemaCreate,
    BorrowRecordSchemaUpdate,
};
