import { TMember, TMemberUpdate } from "./user.interface";
import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

// Define createBook function to insert a new book into the database
const createUser = async (
  payload: Prisma.MemberCreateInput
): Promise<TMember> => {
  const newBook = await prisma.member.create({
    data: payload,
  });
  return newBook;
};

const getAllUser = async () => {
  const users = await prisma.member.findMany();

  return users;
};

const getSingleUser = async (UserId: string) => {
  const user = await prisma.member.findUnique({
    where: { memberId: UserId },
  });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not found");
  }
  return user;
};

const updateUser = async (
  UserId: string,
  payload: Partial<TMemberUpdate>
): Promise<TMember> => {
  const { name, email, phone } = payload;

  const updateUser = await prisma.member.update({
    where: { memberId: UserId },
    data: {
      name,
      email,
      phone,
    },
  });
  return updateUser;
};

const deleteUser = async (UserId: string) => {
  const user = await prisma.member.findUnique({
    where: { memberId: UserId },
  });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not found");
  }
  const result = await prisma.member.delete({
    where: { memberId: UserId },
  });

  return result;
};

export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
