import {Request, Response} from "express";
import teacherService from "../service/Teacher-Service";

class TeacherController {
    findAll = async (req: Request, res: Response) => {
        let {name, age, salary} = req.query;
        try {
            if (name === undefined && age === undefined && salary === undefined) {
                let data = await teacherService.findAll();
                res.status(200).json(data);
            } else if (name !== undefined && age === undefined && salary === undefined) {
                let data = await teacherService.findByName(name);
                res.status(200).json(data);
            } else if (name === undefined && age !== undefined && salary === undefined) {
                let data = await teacherService.findByAge(age);
                res.json(data);
            } else if (name === undefined && age === undefined && salary !== undefined) {
                let data = await teacherService.findBySalary(salary);
                res.status(200).json(data);
            }
        }
        catch (error) {
            res.status(500).json(error)
        }
    };

    findById = async (req: Request, res:Response) => {
        try {
            let findById = await teacherService.findById(req.params.id);
            res.status(200).json(findById)
        }
        catch (error) {
            res.status(500).json(error);
        }
    }

    add = async (req: Request, res: Response)=> {
        try {
            let data = await teacherService.add(req.body);
            res.status(200).json(data)
        }
        catch (error) {
            res.status(500).json(error)
        }
    };

    update = async (req: Request, res:Response) => {
        try {
            let object = await teacherService.update(req.params.id, req.body);
            res.status(200).json(object);
        }
        catch (error) {
            res.status(500).json(error)
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            let data = await teacherService.delete(req.params.id);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json(error)
        }
    }



}

export default new TeacherController();
