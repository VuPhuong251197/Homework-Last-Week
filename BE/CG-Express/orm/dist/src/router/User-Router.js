"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_Controller_1 = __importDefault(require("../controller/User-Controller"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/register', User_Controller_1.default.register);
exports.userRouter.post('/login', User_Controller_1.default.login);
//# sourceMappingURL=User-Router.js.map