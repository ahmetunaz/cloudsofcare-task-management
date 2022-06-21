export class TaskDTO {
  id: number = 0;
  name: string = "";
  description: string = "";
  case_id: number = 0;
  assigned_to: number = 0;
  assigned_by: number = 0;
  is_completed: boolean = false;
  completed_at: string = "";
  created_at: string = "";
}

export class CreateTaskDTO {
  name: string = "";
  description: string = "";
  case_id: number = 0;
  assigned_to: number = 0;
  assigned_by: number = 0;
}

export class UpdateTaskDTO {
  id: number = 0;
  name: string = "";
  description: string = "";
  case_id: number = 0;
  assigned_to: number = 0;
  assigned_by: number = 0;
  is_completed: boolean = false;
}
