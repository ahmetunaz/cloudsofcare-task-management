import * as AuthService from "./auth";
import * as CaseService from "./case";
import * as TaskService from "./task";
import * as UserService from "./user";

const apiService = {
  ...AuthService,
  ...CaseService,
  ...TaskService,
  ...UserService,
};

export default apiService;
