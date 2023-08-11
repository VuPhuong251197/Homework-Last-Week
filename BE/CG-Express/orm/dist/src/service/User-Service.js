"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.register = async (user) => {
            let userObj = await this.userRepository.findOne({
                where: {
                    username: user.username
                }
            });
            if (userObj && user.username === userObj.username) {
                return `Account '${user.username}' already exists`;
            }
            else {
                return this.userRepository.save(user);
            }
        };
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.findOne({
                where: {
                    username: user.username
                }
            });
            if (!userFind) {
                return 'User does not exist';
            }
            else {
                if (user.password == userFind.password) {
                    const userId = userFind.id;
                    return `${userId}`;
                }
                else {
                    return 'Password Is Wrong!';
                }
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=User-Service.js.map