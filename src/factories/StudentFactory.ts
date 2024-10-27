import { StudentRepository } from "../repositories/Student.ts";
import { StudentService } from "../services/StudentService.ts";

export class StudentFactory {
  static getInstance() {
    const studentRepository = new StudentRepository();
    const studentService = new StudentService(studentRepository);

    return studentService;
  }
}
