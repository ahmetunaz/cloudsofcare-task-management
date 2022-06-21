import { Task } from "./Task";
import { CreateTaskDTO, UpdateTaskDTO } from "./TaskTypes";

export interface TaskRepository {
  GetAll(): Promise<Task[]>;
  GetById(id: number): Promise<Task>;
  Create(data: CreateTaskDTO): Promise<Task>;
  Update(data: UpdateTaskDTO): Promise<Task>;
  Delete(id: number): Promise<Task>;
}
