import { put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_USER, GET_USERS } from "./actionTypes";
import {
  getUserSuccess,
  getUserFail,
  getUsersSuccess,
  getUsersFail,
} from "./actions";

import { UserRepositoryImpl } from "core/infrastructure/User/UserRepositoryImpl";
import { UserServiceImpl } from "core/usecases/User/UserService";

function* fetchUser({ payload }) {
  try {
    const UserRepo = new UserRepositoryImpl();
    const UserService = new UserServiceImpl(UserRepo);
    const response = yield UserService.GetUser(payload);
    yield put(getUserSuccess(response));
  } catch (error) {
    yield put(getUserFail(error));
  }
}

function* fetchUsers({ payload }) {
  try {
    const UserRepo = new UserRepositoryImpl();
    const UserService = new UserServiceImpl(UserRepo);
    const response = yield UserService.GetUsers();
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

function* UserSaga() {
  yield takeEvery(GET_USER, fetchUser);
  yield takeEvery(GET_USERS, fetchUsers);
}

export default UserSaga;
