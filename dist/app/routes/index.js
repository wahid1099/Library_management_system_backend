"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/Books/book.route");
const user_route_1 = require("../modules/user/user.route");
const borrow_route_1 = require("../modules/BorrowRecord/borrow.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/members",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/",
        route: borrow_route_1.BorrowRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
