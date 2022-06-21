import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL,
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAIL,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  RESET_STATE,
  RESET_STATUS,
} from "./actionTypes";

export const getTasks = () => ({
  type: GET_TASKS,
});

export const getTasksSuccess = payload => ({
  type: GET_TASKS_SUCCESS,
  payload,
});

export const getTasksFail = payload => ({
  type: GET_TASKS_FAIL,
  payload,
});

export const getTask = id => ({
  type: GET_TASK,
  payload: id,
});

export const getTaskSuccess = payload => ({
  type: GET_TASK_SUCCESS,
  payload,
});

export const getTaskFail = payload => ({
  type: GET_TASK_FAIL,
  payload,
});

export const createTask = payload => ({
  type: CREATE_TASK,
  payload,
});

export const createTaskSuccess = payload => ({
  type: CREATE_TASK_SUCCESS,
  payload,
});

export const createTaskFail = payload => ({
  type: CREATE_TASK_FAIL,
  payload,
});

export const updateTask = payload => ({
  type: UPDATE_TASK,
  payload,
});

export const updateTaskSuccess = payload => ({
  type: UPDATE_TASK_SUCCESS,
  payload,
});

export const updateTaskFail = payload => ({
  type: UPDATE_TASK_FAIL,
  payload,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id,
});

export const deleteTaskSuccess = payload => ({
  type: DELETE_TASK_SUCCESS,
  payload,
});

export const deleteTaskFail = payload => ({
  type: DELETE_TASK_FAIL,
  payload,
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const resetStatus = () => ({
  type: RESET_STATUS,
});
