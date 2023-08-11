import {Teacher} from "../entity/Teacher";
import {AppDataSource} from "../data-source";

class TeacherService {
    private teacherRepository;
    constructor() {
        this.teacherRepository = AppDataSource.getRepository(Teacher);
    };

    findAll = async () => {
        return this.teacherRepository.find()
    };

    findByName = async (name) => {
        return await this.teacherRepository.findOne({
            where: {
                name: name
            }
        })
    };

    findByAge = async (age) => {
        return await this.teacherRepository.findOne({
            where: {
                age: age
            }
        })
    };

    findBySalary = async (salary) => {
        return await this.teacherRepository.findOne({
            where: {
                salary: salary
            }
        })
    };

    findById = async (id) => {
        return await this.teacherRepository.find({
            where: {
                id: id
            }
        })
    }

    add = async (teacher) => {
        return await this.teacherRepository.save(teacher)
    };

    update = async (id, data) => {
        return await this.teacherRepository.update(id, data)
    };

    delete = async (id) => {
        return await this.teacherRepository.delete(id)
    };
}

export default new TeacherService();
