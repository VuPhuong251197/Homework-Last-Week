"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Teacher_1 = require("../entity/Teacher");
const data_source_1 = require("../data-source");
class TeacherService {
    constructor() {
        this.findAll = async () => {
            return this.teacherRepository.find();
        };
        this.findByName = async (name) => {
            return await this.teacherRepository.findOne({
                where: {
                    name: name
                }
            });
        };
        this.findByAge = async (age) => {
            return await this.teacherRepository.findOne({
                where: {
                    age: age
                }
            });
        };
        this.findBySalary = async (salary) => {
            return await this.teacherRepository.findOne({
                where: {
                    salary: salary
                }
            });
        };
        this.findById = async (id) => {
            return await this.teacherRepository.find({
                where: {
                    id: id
                }
            });
        };
        this.add = async (teacher) => {
            return await this.teacherRepository.save(teacher);
        };
        this.update = async (id, data) => {
            return await this.teacherRepository.update(id, data);
        };
        this.delete = async (id) => {
            return await this.teacherRepository.delete(id);
        };
        this.teacherRepository = data_source_1.AppDataSource.getRepository(Teacher_1.Teacher);
    }
    ;
}
exports.default = new TeacherService();
//# sourceMappingURL=Teacher-Service.js.map