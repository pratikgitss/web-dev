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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
                email
            }
        });
        console.log(response);
    });
}
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId: userId
            }
        });
        console.log(response);
    });
}
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
}
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.create({
            data: {
                userId,
                title,
                description
            }
        });
        console.log(response);
    });
}
// insertUser("pratik2", "mypass2", "Praitk2", "Wasekar2", "p2@gmail.com");
//createTodo(1, "Learning Prisma2", "till completion 2")
getTodos(1);
