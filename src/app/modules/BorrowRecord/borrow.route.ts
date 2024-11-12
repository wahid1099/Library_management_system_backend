import express from "express";
import { BorrowBookController } from "./borrow.controller";

const router = express.Router();

router.post("/borrow", BorrowBookController.BorrowBookIntoDB);
router.post("/return", BorrowBookController.returnBookIntoDb);
router.get("/borrow/overdue", BorrowBookController.getOverdueBorrowList);

export const BorrowRoutes = router;
