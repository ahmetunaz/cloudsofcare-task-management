import {
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_DATA_FAIL,
  GET_DASHBOARD_DATA_SUCCESS,
} from "./actionTypes";

export const getDashboardData = payload => ({
  type: GET_DASHBOARD_DATA,
  payload,
});

export const getDashboardDataSuccess = payload => ({
  type: GET_DASHBOARD_DATA_SUCCESS,
  payload,
});

export const getDashboardDataFail = payload => ({
  type: GET_DASHBOARD_DATA_FAIL,
  payload,
});
