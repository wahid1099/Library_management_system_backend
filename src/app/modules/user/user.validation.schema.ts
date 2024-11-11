import { z } from "zod";

// Member creation validation schema (all fields required)
const UserSchemaCreate = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number is required"),
  membershipDate: z.date(),
});

// Member update validation schema (most fields optional)
const UserSchemaUpdate = z.object({
  memberId: z.string().uuid(),
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(10).optional(),
  membershipDate: z.date().optional(),
});

export const MemberValidationSchema = {
  UserSchemaCreate,
  UserSchemaUpdate,
};
