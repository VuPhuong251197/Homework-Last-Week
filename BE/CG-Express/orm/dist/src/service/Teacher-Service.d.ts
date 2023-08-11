declare class TeacherService {
    private teacherRepository;
    constructor();
    findAll: () => Promise<any>;
    findByName: (name: any) => Promise<any>;
    findByAge: (age: any) => Promise<any>;
    findBySalary: (salary: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    add: (teacher: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
}
declare const _default: TeacherService;
export default _default;
