import { User } from "../entity/User";
declare class UserService {
    private userRepository;
    constructor();
    register: (user: User) => Promise<any>;
    checkUser: (user: any) => Promise<string>;
}
declare const _default: UserService;
export default _default;
