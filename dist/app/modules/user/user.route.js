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
// GET all user
router.get("/", user_controller_1.UserController.getAllUsersfromDb);
// GET a single user by ID
router.get("/:userId", user_controller_1.UserController.getSingleUserfromDb);
// POST a new user
router.post("/", (0, validateRequest_1.default)(user_validation_schema_1.MemberValidationSchema.UserSchemaCreate), user_controller_1.UserController.inserUserIntoDB);
// PUT (update) an existing book by ID
router.put("/:userId", user_controller_1.UserController.updateUserIntoDb);
// DELETE a book by ID
router.delete("/:userId", user_controller_1.UserController.deleteUserfromDb);
exports.UserRoutes = router;
