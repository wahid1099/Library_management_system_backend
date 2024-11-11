"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controller_1 = require("./book.controller");
const express_1 = __importDefault(require("express"));
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.get("/", book_controller_1.BookController.getAllBooksfromDb);
router.get("/:bookId", book_controller_1.BookController.getSingleBookfromDb);
router.post("/", (0, validateRequest_1.default)(book_validation_1.BookValidationSchema.BookSchemaCreate), book_controller_1.BookController.inserBookIntoDB);
exports.BookRoutes = router;
