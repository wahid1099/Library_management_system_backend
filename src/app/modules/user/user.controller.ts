import { UserService } from "./user.service";
import { Request, Response } from "express";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const inserUserIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Member created successfully",
    data: result,
  });
});

const getAllUsersfromDb = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getSingleUserfromDb = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await UserService.getSingleUser(userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateUserIntoDb = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await UserService.updateUser(userId, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member updated successfully",
    data: result,
  });
};

const deleteUserfromDb = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await UserService.deleteUser(userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member successfully deleted",
  });
};

export const UserController = {
  inserUserIntoDB,
  getAllUsersfromDb,
  getSingleUserfromDb,
  updateUserIntoDb,
  deleteUserfromDb,
};
