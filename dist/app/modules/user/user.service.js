"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Define createBook function to insert a new book into the database
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = yield prisma_1.default.member.create({
        data: payload,
    });
    return newBook;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.member.findMany();
    return users;
});
const getSingleUser = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.member.findUnique({
        where: { memberId: UserId },
    });
    return user;
});
const updateUser = (UserId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone } = payload;
    const updateUser = yield prisma_1.default.member.update({
        where: { memberId: UserId },
        data: {
            name,
            email,
            phone,
        },
    });
    return updateUser;
});
const deleteUser = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.delete({
        where: { memberId: UserId },
    });
    return result;
});
exports.UserService = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
