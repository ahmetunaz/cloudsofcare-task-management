import {
  TaskDTO,
  CreateTaskDTO,
  UpdateTaskDTO,
} from "core/entities/Task/TaskTypes";
import { Task } from "core/entities/Task/Task";
import { TaskRepository } from "core/entities/Task/TaskRepository";

import services from "../Services";
import { serializeDTO } from "helpers/utils";

export class TaskRepositoryImpl implements TaskRepository {
  async GetAll(
    assigned_to: number,
    assigned_by: number,
    is_completed: boolean,
    created_at_gte: string,
    created_at_lte: string
  ): Promise<Task[]> {
    const items = await services.api.getTasks(
      assigned_to,
      assigned_by,
      is_completed,
      created_at_gte,
      created_at_lte
    );

    return items.map(
      (item: TaskDTO) =>
        new Task(
          item.id,
          item.name,
          item.description,
          item.case_id,
          item.assigned_to,
          item.assigned_by,
          item.is_completed,
          item.completed_at,
          item.created_at
        )
    );
  }

  async GetById(id: number): Promise<Task> {
    const item = await services.api.getTask(id);

    return new Task(
      item.id,
      item.name,
      item.description,
      item.case_id,
      item.assigned_to,
      item.assigned_by,
      item.is_completed,
      item.completed_at,
      item.created_at
    );
  }

  async Create(data: CreateTaskDTO): Promise<Task> {
    const serializedData = serializeDTO(CreateTaskDTO, data);
    console.log("data", data);
    console.log("serializedData", serializedData);

    const item: TaskDTO = await services.api.createTask(serializedData);
    return new Task(
      item.id,
      item.name,
      item.description,
      item.case_id,
      item.assigned_to,
      item.assigned_by,
      item.is_completed,
      item.completed_at,
      item.created_at
    );
  }

  async Update(data: UpdateTaskDTO): Promise<Task> {
    const serializedData = serializeDTO(UpdateTaskDTO, data);

    const item: TaskDTO = await services.api.updateTask(serializedData);
    return new Task(
      item.id,
      item.name,
      item.description,
      item.case_id,
      item.assigned_to,
      item.assigned_by,
      item.is_completed,
      item.completed_at,
      item.created_at
    );
  }

  async Delete(id: number): Promise<number> {
    await services.api.deleteTask(id);

    return id;
  }
}
