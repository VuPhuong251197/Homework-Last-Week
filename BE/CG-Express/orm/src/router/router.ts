import {Router} from "express";
import {userRouter} from "./User-Router";
import {teacherRouter} from "./Teacher-Router";


const router = Router();
router.use('/', userRouter);

router.use('/teachers', teacherRouter);
export default router;
