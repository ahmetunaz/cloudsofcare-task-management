import * as AuthService from "./auth";
import * as CaseService from "./case";
import * as TaskService from "./task";

const apiService = {
  ...AuthService,
  ...CaseService,
  ...TaskService,
};

export default apiService;
