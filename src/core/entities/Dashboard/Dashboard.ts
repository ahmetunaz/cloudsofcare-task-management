import {
  TaskPerCase,
  UserAssignment,
  UserCurrentTask,
  UserTask,
} from "./DashboardTypes";

export class Dashboard {
  userCurrentTasks: UserCurrentTask[];
  userAssignments: UserAssignment[];
  userTasks: UserTask[];
  taskPerCases: TaskPerCase[];
  caseWithTask: number;

  constructor(
    userCurrentTasks: UserCurrentTask[],
    userAssignments: UserAssignment[],
    userTasks: UserTask[],
    taskPerCases: TaskPerCase[],
    caseWithTask: number
  ) {
    this.userCurrentTasks = userCurrentTasks;
    this.userAssignments = userAssignments;
    this.userTasks = userTasks;
    this.taskPerCases = taskPerCases;
    this.caseWithTask = caseWithTask;
  }
}
