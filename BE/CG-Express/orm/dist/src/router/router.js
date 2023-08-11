"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_Router_1 = require("./User-Router");
const Teacher_Router_1 = require("./Teacher-Router");
const router = (0, express_1.Router)();
router.use('/', User_Router_1.userRouter);
router.use('/teachers', Teacher_Router_1.teacherRouter);
exports.default = router;
//# sourceMappingURL=router.js.map