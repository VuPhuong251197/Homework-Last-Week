"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_Service_1 = __importDefault(require("../service/User-Service"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            try {
                let result = await User_Service_1.default.register(req.body);
                res.status(201).json(result);
            }
            catch (e) {
                res.status(500).json(e);
            }
        };
        this.login = async (req, res) => {
            try {
                let resultCheck = await User_Service_1.default.checkUser(req.body);
                res.status(200).json(resultCheck);
            }
            catch (e) {
                res.status(500).json(e);
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=User-Controller.js.map