import { Task } from "core/entities/Task/Task";
import { TaskRepository } from "core/entities/Task/TaskRepository";
import { CreateTaskDTO, UpdateTaskDTO } from "core/entities/Task/TaskTypes";

export interface TaskService {
  GetAll(): Promise<Task[]>;
  GetById(id: number): Promise<Task>;
  Create(data: CreateTaskDTO): Promise<Task>;
  Update(data: UpdateTaskDTO): Promise<Task>;
  Delete(id: number): Promise<number>;
}

export class TaskServiceImpl implements TaskService {
  taskRepo: TaskRepository;

  constructor(tr: TaskRepository) {
    this.taskRepo = tr;
  }

  async GetAll(): Promise<Task[]> {
    return this.taskRepo.GetAll();
  }

  async GetById(id: number): Promise<Task> {
    return this.taskRepo.GetById(id);
  }

  async Create(data: CreateTaskDTO): Promise<Task> {
    return this.taskRepo.Create(data);
  }

  async Update(data: UpdateTaskDTO): Promise<Task> {
    return this.taskRepo.Update(data);
  }

  async Delete(id: number): Promise<number> {
    return this.taskRepo.Delete(id);
  }
}
