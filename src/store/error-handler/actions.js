import { RESET_ERROR, SET_ERROR } from "./actionTypes";

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const resetError = () => ({
  type: RESET_ERROR,
});
