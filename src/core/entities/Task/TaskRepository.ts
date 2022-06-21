import { Task } from "./Task";
import { CreateTaskDTO, UpdateTaskDTO } from "./TaskTypes";

export interface TaskRepository {
  GetAll(
    assigned_to: number,
    assigned_by: number,
    is_completed: boolean,
    created_at_gte: string,
    created_at_lte: string
  ): Promise<Task[]>;
  GetById(id: number): Promise<Task>;
  Create(data: CreateTaskDTO): Promise<Task>;
  Update(data: UpdateTaskDTO): Promise<Task>;
  Delete(id: number): Promise<number>;
}
