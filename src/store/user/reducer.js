import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  user: {},
  users: {},
  loading: false,
  error: {},
};

const UserState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
        error: {},
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: {},
      };

    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_USERS:
      return {
        ...state,
        loading: true,
        error: {},
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: {},
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default UserState;
