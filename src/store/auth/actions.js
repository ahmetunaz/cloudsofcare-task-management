import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "./actionTypes";

export const login = payload => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: LOGIN_FAIL,
  payload,
});

export const register = payload => ({
  type: REGISTER,
  payload,
});

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFail = payload => ({
  type: REGISTER_FAIL,
  payload,
});

export const logOut = () => ({
  type: LOGOUT,
});
