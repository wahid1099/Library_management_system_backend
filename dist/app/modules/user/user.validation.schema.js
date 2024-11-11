"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberValidationSchema = void 0;
const zod_1 = require("zod");
// Member creation validation schema (all fields required)
const UserSchemaCreate = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email format"),
    phone: zod_1.z.string().min(10, "Phone number is required"),
    membershipDate: zod_1.z.date(),
});
// Member update validation schema (most fields optional)
const UserSchemaUpdate = zod_1.z.object({
    memberId: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(1).optional(),
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().min(10).optional(),
    membershipDate: zod_1.z.date().optional(),
});
exports.MemberValidationSchema = {
    UserSchemaCreate,
    UserSchemaUpdate,
};
