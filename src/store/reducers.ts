import { combineReducers } from "redux";

import Layout from "./layout/reducer";

import Auth from "./auth/reducer";

import ErrorHandlerState from "./error-handler/reducer";

import CaseState from "./case/reducer";

import TaskState from "./task/reducer";

import UserState from "./user/reducer";

const rootReducer = combineReducers({
  // public
  Auth,
  Layout,
  ErrorHandlerState,
  CaseState,
  TaskState,
  UserState,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
