import {Request, Response} from "express";
import userService from "../service/User-Service";

class UserController {
    register = async (req: Request, res: Response) => {
        try {
            let result = await userService.register(req.body);
            res.status(201).json(result);
        }
        catch (e) {
            res.status(500).json(e);
        }

    };

    login = async (req: Request, res: Response) => {
        try {
            let resultCheck = await userService.checkUser(req.body);
            res.status(200).json(resultCheck);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();