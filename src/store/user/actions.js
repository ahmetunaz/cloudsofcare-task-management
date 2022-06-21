import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "./actionTypes";

export const getUser = id => ({
  type: GET_USER,
  payload: id,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserFail = error => ({
  type: GET_USER_FAIL,
  payload: error,
});

export const getUsers = (limit, after) => ({
  type: GET_USERS,
  payload: {
    limit,
    after,
  },
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFail = error => ({
  type: GET_USERS_FAIL,
  payload: error,
});
