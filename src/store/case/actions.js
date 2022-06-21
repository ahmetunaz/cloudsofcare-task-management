import {
  GET_CASES,
  GET_CASES_SUCCESS,
  GET_CASES_FAIL,
  GET_CASE,
  GET_CASE_SUCCESS,
  GET_CASE_FAIL,
  CREATE_CASE,
  CREATE_CASE_SUCCESS,
  CREATE_CASE_FAIL,
  UPDATE_CASE,
  UPDATE_CASE_SUCCESS,
  UPDATE_CASE_FAIL,
  DELETE_CASE,
  DELETE_CASE_SUCCESS,
  DELETE_CASE_FAIL,
  RESET_STATE,
  RESET_STATUS,
} from "./actionTypes";

export const getCases = () => ({
  type: GET_CASES,
});

export const getCasesSuccess = payload => ({
  type: GET_CASES_SUCCESS,
  payload,
});

export const getCasesFail = payload => ({
  type: GET_CASES_FAIL,
  payload,
});

export const getCase = id => ({
  type: GET_CASE,
  payload: id,
});

export const getCaseSuccess = payload => ({
  type: GET_CASE_SUCCESS,
  payload,
});

export const getCaseFail = payload => ({
  type: GET_CASE_FAIL,
  payload,
});

export const createCase = payload => ({
  type: CREATE_CASE,
  payload,
});

export const createCaseSuccess = payload => ({
  type: CREATE_CASE_SUCCESS,
  payload,
});

export const createCaseFail = payload => ({
  type: CREATE_CASE_FAIL,
  payload,
});

export const updateCase = payload => ({
  type: UPDATE_CASE,
  payload,
});

export const updateCaseSuccess = payload => ({
  type: UPDATE_CASE_SUCCESS,
  payload,
});

export const updateCaseFail = payload => ({
  type: UPDATE_CASE_FAIL,
  payload,
});

export const deleteCase = id => ({
  type: DELETE_CASE,
  payload: id,
});

export const deleteCaseSuccess = payload => ({
  type: DELETE_CASE_SUCCESS,
  payload,
});

export const deleteCaseFail = payload => ({
  type: DELETE_CASE_FAIL,
  payload,
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const resetStatus = () => ({
  type: RESET_STATUS,
});
