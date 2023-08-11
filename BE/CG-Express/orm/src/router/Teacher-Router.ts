import {Router} from "express";
import teacherController from "../controller/Teacher-Controller";


export const teacherRouter = Router();
teacherRouter.get('/', teacherController.findAll);

teacherRouter.get('/:id', teacherController.findById);

teacherRouter.post('/', teacherController.add);

teacherRouter.put('/:id', teacherController.update)

teacherRouter.delete('/:id', teacherController.delete);