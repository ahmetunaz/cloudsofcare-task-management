import { RESET_ERROR, SET_ERROR } from "./actionTypes";

const INIT_STATE = {
  error: null,
};

const ErrorHandlerState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default ErrorHandlerState;
