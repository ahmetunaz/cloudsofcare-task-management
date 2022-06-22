import { client } from "../../HttpClient";
import _ from "lodash";
import { CaseDTO } from "core/entities/Case/CaseTypes";
import { TaskDTO } from "core/entities/Task/TaskTypes";
import {
  TaskPerCase,
  UserAssignment,
  UserCurrentTask,
  UserTask,
} from "core/entities/Dashboard/DashboardTypes";
import { UserDTO } from "core/entities/User/UserTypes";

export const getDashboardData = async (userId: number): Promise<any> => {
  // User & case list to join
  const users = await get("users");
  const cases = await get("cases");
  const tasks = await get("tasks");

  // How many tasks are currently assigned to a user (userCurrentTasks)
  const userCurrentTasks = getUserCurrentTasks(userId, cases, tasks);

  // How many tasks a user assigns to each other individual user (UserAssignments)
  const userAssignments = getUserAssignments(userId, tasks, users);

  // The total number of tasks that have ever been assigned to a user (user tasks)
  const userTasks = getUserTasks(userId, cases, tasks);

  // The number of tasks per case (taskpercase)
  const tasksPerCase = getTasksPerCase(cases, tasks);

  // The number of cases with tasks (casewithtask)
  const numberOfCasesWithTasks = getNumberOfCasesWithTasks(tasks);

  return {
    userCurrentTasks: userCurrentTasks,
    userAssignments: userAssignments,
    userTasks: userTasks,
    taskPerCases: tasksPerCase,
    caseWithTask: numberOfCasesWithTasks,
  };
};

const get = async (url: string): Promise<any> => {
  const response = await client.get(url);
  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

// The total number of tasks that have ever been assigned to a user (user tasks)
const getUserTasks = (userId: number, cases: CaseDTO[], tasks: TaskDTO[]) => {
  const userCurrentTasksData = tasks.filter(
    (task: TaskDTO) => task.assigned_to === userId
  );
  const userCurrentTasksDataGroupBy = _.groupBy(
    userCurrentTasksData,
    "case_id"
  );
  const userCurrentTasks: UserTask[] = Object.keys(
    userCurrentTasksDataGroupBy
  ).map(caseId => {
    const case_ = cases.find((case_: CaseDTO) => case_.id === Number(caseId));
    const caseName = case_?.name || "";
    return {
      case: caseName,
      count: userCurrentTasksDataGroupBy[caseId].length,
    };
  });
  return userCurrentTasks;
};

// How many tasks are currently assigned to a user (userCurrentTasks)
const getUserCurrentTasks = (
  userId: number,
  cases: CaseDTO[],
  tasks: TaskDTO[]
) => {
  const userCurrentTasksData = tasks.filter(
    (task: TaskDTO) => task.assigned_to === userId && !task.is_completed
  );
  const userCurrentTasksDataGroupBy = _.groupBy(
    userCurrentTasksData,
    "case_id"
  );
  const userCurrentTasks: UserCurrentTask[] = Object.keys(
    userCurrentTasksDataGroupBy
  ).map(caseId => {
    const case_ = cases.find((case_: CaseDTO) => case_.id === Number(caseId));
    const caseName = case_?.name || "";
    return {
      case: caseName,
      count: userCurrentTasksDataGroupBy[caseId].length,
    };
  });
  return userCurrentTasks;
};

// How many tasks a user assigns to each other individual user (UserAssignments)
class UserAssignmentDTO {
  user: number = 0;
  assigned_to: number = 0;
  assigned_by: number = 0;
}

const getUserAssignments = (
  userId: number,
  tasks: TaskDTO[],
  users: UserDTO[]
) => {
  const userRelatedTasksData = tasks.filter(
    (task: TaskDTO) =>
      task.assigned_to === userId || task.assigned_by === userId
  );
  let userAssignmentsData: UserAssignmentDTO[] = [];

  userRelatedTasksData.forEach((task: TaskDTO) => {
    const relatedUserId =
      task.assigned_by === userId ? task.assigned_to : task.assigned_by;

    const relUserAssgIndex = userAssignmentsData.findIndex(
      data => data.user === relatedUserId
    );

    if (relUserAssgIndex === -1) {
      userAssignmentsData.push({
        user: relatedUserId,
        assigned_to: task.assigned_by === userId ? 1 : 0,
        assigned_by: task.assigned_to === userId ? 1 : 0,
      });
    } else {
      userAssignmentsData[relUserAssgIndex] = {
        user: userAssignmentsData[relUserAssgIndex].user,
        assigned_to:
          task.assigned_by === userId
            ? userAssignmentsData[relUserAssgIndex].assigned_to + 1
            : userAssignmentsData[relUserAssgIndex].assigned_to,
        assigned_by:
          task.assigned_to === userId
            ? userAssignmentsData[relUserAssgIndex].assigned_by + 1
            : userAssignmentsData[relUserAssgIndex].assigned_by,
      };
    }
  });

  const userAssignments: UserAssignment[] = userAssignmentsData.map(
    userAssg => {
      return {
        user: users.find(user => user.id === userAssg.user)?.name || "",
        assigned_to: userAssg.assigned_to,
        assigned_by: userAssg.assigned_by,
      };
    }
  );

  return userAssignments;
};

// The number of tasks per case (taskpercase)
const getTasksPerCase = (cases: CaseDTO[], tasks: TaskDTO[]) => {
  const tasksGroupByCase = _.groupBy(tasks, "case_id");
  const tasksPerCase: TaskPerCase[] = Object.keys(tasksGroupByCase).map(
    caseId => {
      const case_ = cases.find((case_: CaseDTO) => case_.id === Number(caseId));
      const caseName = case_?.name || "";
      return {
        case: caseName,
        count: tasksGroupByCase[caseId].length,
      };
    }
  );
  return tasksPerCase;
};

// The number of cases with tasks (casewithtask)
const getNumberOfCasesWithTasks = (tasks: TaskDTO[]) => {
  const tasksGroupByCase = _.groupBy(tasks, "case_id");
  return Object.keys(tasksGroupByCase).length;
};
