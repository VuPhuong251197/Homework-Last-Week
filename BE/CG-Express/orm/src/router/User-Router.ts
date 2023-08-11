import {Router} from "express";
import userController from "../controller/User-Controller";

export const userRouter = Router();
userRouter.post('/register', userController.register);

userRouter.post('/login', userController.login);