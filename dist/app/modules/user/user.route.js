"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_validation_schema_1 = require("./user.validation.schema");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// GET all books
// router.get("/", BookController.getAllBooksfromDb);
// // GET a single book by ID
// router.get("/:bookId", BookController.getSingleBookfromDb);
// POST a new user
router.post("/", (0, validateRequest_1.default)(user_validation_schema_1.MemberValidationSchema.UserSchemaCreate), user_controller_1.UserController.inserUserIntoDB);
// // PUT (update) an existing book by ID
// router.put("/:bookId", BookController.updateBookIntoDb);
// // DELETE a book by ID
// router.delete("/:bookId", BookController.deleteBookfromDb);
exports.UserRoutes = router;
