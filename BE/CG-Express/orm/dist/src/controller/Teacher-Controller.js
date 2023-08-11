"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Teacher_Service_1 = __importDefault(require("../service/Teacher-Service"));
class TeacherController {
    constructor() {
        this.findAll = async (req, res) => {
            let { name, age, salary } = req.query;
            try {
                if (name === undefined && age === undefined && salary === undefined) {
                    let data = await Teacher_Service_1.default.findAll();
                    res.status(200).json(data);
                }
                else if (name !== undefined && age === undefined && salary === undefined) {
                    let data = await Teacher_Service_1.default.findByName(name);
                    res.status(200).json(data);
                }
                else if (name === undefined && age !== undefined && salary === undefined) {
                    let data = await Teacher_Service_1.default.findByAge(age);
                    res.json(data);
                }
                else if (name === undefined && age === undefined && salary !== undefined) {
                    let data = await Teacher_Service_1.default.findBySalary(salary);
                    res.status(200).json(data);
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.findById = async (req, res) => {
            try {
                let findById = await Teacher_Service_1.default.findById(req.params.id);
                res.status(200).json(findById);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.add = async (req, res) => {
            try {
                let data = await Teacher_Service_1.default.add(req.body);
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.update = async (req, res) => {
            try {
                let object = await Teacher_Service_1.default.update(req.params.id, req.body);
                res.status(200).json(object);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.delete = async (req, res) => {
            try {
                let data = await Teacher_Service_1.default.delete(req.params.id);
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
    }
}
exports.default = new TeacherController();
//# sourceMappingURL=Teacher-Controller.js.map