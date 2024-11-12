import express from "express";
import { BookRoutes } from "../modules/Books/book.route";
import { UserRoutes } from "../modules/user/user.route";
import { BorrowRoutes } from "../modules/BorrowRecord/borrow.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: UserRoutes,
  },
  {
    path: "/",
    route: BorrowRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
