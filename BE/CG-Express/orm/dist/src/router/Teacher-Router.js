"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherRouter = void 0;
const express_1 = require("express");
const Teacher_Controller_1 = __importDefault(require("../controller/Teacher-Controller"));
exports.teacherRouter = (0, express_1.Router)();
exports.teacherRouter.get('/', Teacher_Controller_1.default.findAll);
exports.teacherRouter.get('/:id', Teacher_Controller_1.default.findById);
exports.teacherRouter.post('/', Teacher_Controller_1.default.add);
exports.teacherRouter.put('/:id', Teacher_Controller_1.default.update);
exports.teacherRouter.delete('/:id', Teacher_Controller_1.default.delete);
//# sourceMappingURL=Teacher-Router.js.map