"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("./borrow.controller");
const router = express_1.default.Router();
router.post("/borrow", borrow_controller_1.BorrowBookController.BorrowBookIntoDB);
router.post("/return", borrow_controller_1.BorrowBookController.returnBookIntoDb);
router.get("/borrow/overdue", borrow_controller_1.BorrowBookController.getOverdueBorrowList);
exports.BorrowRoutes = router;
