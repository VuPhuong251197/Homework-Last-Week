import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from "../middleware/jwt";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user: User) => {
        let userObj = await this.userRepository.findOne({
            where : {
                username: user.username
            }
        });

        if (userObj && user.username === userObj.username) {
            return `Account '${user.username}' already exists`;
        }
        else {
            return this.userRepository.save(user)
        }
    }

    checkUser = async (user) => {
        let userFind = await this.userRepository.findOne({
            where : {
                username: user.username
            }
        });

        if (!userFind) {
            return 'User does not exist';
        }
        else {
            if (user.password == userFind.password) {
                const userId = userFind.id;
                return `${userId}`
            }
            else {
                return 'Password Is Wrong!';
            }
        }
    }
}

export default new UserService();