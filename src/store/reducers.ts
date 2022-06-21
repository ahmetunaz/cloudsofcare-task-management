import { combineReducers } from "redux";

import Layout from "./layout/reducer";

import Auth from "./auth/reducer";

import ErrorHandlerState from "./error-handler/reducer";

const rootReducer = combineReducers({
  // public
  Auth,
  Layout,
  ErrorHandlerState,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
