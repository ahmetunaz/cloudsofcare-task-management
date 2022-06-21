import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "./actionTypes";

const INIT_STATE = {
  auth: {},
  loading: false,
};

const AuthState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        loading: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };

    case REGISTER:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        loading: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        auth: {},
        loading: false,
      };

    default:
      return state;
  }
};

export default AuthState;
