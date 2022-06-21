import { put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import {
  CREATE_TASK,
  DELETE_TASK,
  GET_TASK,
  GET_TASKS,
  UPDATE_TASK,
} from "./actionTypes";
import {
  getTaskSuccess,
  getTaskFail,
  getTasksSuccess,
  getTasksFail,
  createTaskSuccess,
  createTaskFail,
  updateTaskSuccess,
  updateTaskFail,
  deleteTaskSuccess,
  deleteTaskFail,
  resetStatus,
  resetState,
} from "./actions";

import { TaskRepositoryImpl } from "core/infrastructure/Task/TaskRepositoryImpl";
import { TaskServiceImpl } from "core/usecases/Task/TaskService";
import { setError } from "store/actions";

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}

function* fetchTask({ payload }) {
  try {
    const TaskRepo = new TaskRepositoryImpl();
    const TaskService = new TaskServiceImpl(TaskRepo);
    const response = yield TaskService.GetById(payload);
    yield put(getTaskSuccess(response));
  } catch (error) {
    yield put(getTaskFail(error));
    yield put(setError(error));
  }
}

function* fetchTasks({ payload }) {
  const {
    assigned_to,
    assigned_by,
    is_completed,
    created_at_gte,
    created_at_lte,
  } = payload || {};
  try {
    const TaskRepo = new TaskRepositoryImpl();
    const TaskService = new TaskServiceImpl(TaskRepo);
    const response = yield TaskService.GetAll(
      assigned_to,
      assigned_by,
      is_completed,
      created_at_gte,
      created_at_lte
    );
    yield put(getTasksSuccess(response));
  } catch (error) {
    yield put(getTasksFail(error));
    yield put(setError(error));
  }
}

function* createTask({ payload }) {
  try {
    const TaskRepo = new TaskRepositoryImpl();
    const TaskService = new TaskServiceImpl(TaskRepo);
    const response = yield TaskService.Create(payload);
    yield put(createTaskSuccess(response));
    yield put(resetState(response));
    yield delay(3000);
    yield put(resetStatus(response));
  } catch (error) {
    yield put(createTaskFail(error));
    yield put(setError(error));
  }
}

function* updateTask({ payload }) {
  try {
    const TaskRepo = new TaskRepositoryImpl();
    const TaskService = new TaskServiceImpl(TaskRepo);
    const response = yield TaskService.Update(payload);
    yield put(updateTaskSuccess(response));
    yield delay(3000);
    yield put(resetStatus(response));
  } catch (error) {
    yield put(updateTaskFail(error));
    yield put(setError(error));
  }
}

function* deleteTask({ payload }) {
  try {
    const TaskRepo = new TaskRepositoryImpl();
    const TaskService = new TaskServiceImpl(TaskRepo);
    const response = yield TaskService.Delete(payload);
    yield put(deleteTaskSuccess(response));
    yield delay(3000);
    yield put(resetStatus());
  } catch (error) {
    yield put(deleteTaskFail(error));
    yield put(setError(error));
  }
}

function* TaskSaga() {
  yield takeEvery(GET_TASK, fetchTask);
  yield takeEvery(GET_TASKS, fetchTasks);
  yield takeEvery(CREATE_TASK, createTask);
  yield takeEvery(UPDATE_TASK, updateTask);
  yield takeEvery(DELETE_TASK, deleteTask);
}

export default TaskSaga;
