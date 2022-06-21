export class Task {
  id: number;
  name: string;
  description: string;
  case_id: number;
  assigned_to: number;
  assigned_by: number;
  is_completed: boolean;
  completed_at: string;
  created_at: string;

  constructor(
    id: number,
    name: string,
    description: string,
    case_id: number,
    assigned_to: number,
    assigned_by: number,
    is_completed: boolean,
    completed_at: string,
    created_at: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.case_id = case_id;
    this.assigned_to = assigned_to;
    this.assigned_by = assigned_by;
    this.is_completed = is_completed;
    this.completed_at = completed_at;
    this.created_at = created_at;
  }
}
