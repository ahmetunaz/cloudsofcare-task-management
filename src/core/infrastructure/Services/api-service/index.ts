import * as AuthService from "./auth";
import * as CaseService from "./case";
import * as TaskService from "./task";
import * as UserService from "./user";
import * as DashboardService from "./dashboard";

const apiService = {
  ...AuthService,
  ...CaseService,
  ...TaskService,
  ...UserService,
  ...DashboardService,
};

export default apiService;
