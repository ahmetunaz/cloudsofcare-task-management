import { put, takeEvery } from "redux-saga/effects";

import { AuthRepositoryImpl } from "core/infrastructure/Auth/AuthRepositoryImpl";
import { AuthServiceImpl } from "core/usecases/Auth/AuthService";

// Crypto Redux States
import { LOGIN, REGISTER } from "./actionTypes";
import {
  loginFail,
  loginSuccess,
  registerFail,
  registerSuccess,
} from "./actions";
import { setError } from "store/actions";

function* login({ payload }) {
  try {
    const authRepo = new AuthRepositoryImpl();
    const authService = new AuthServiceImpl(authRepo);
    const response = yield authService.Login(payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFail(error));
    yield put(setError(error));
  }
}

function* register({ payload }) {
  try {
    const authRepo = new AuthRepositoryImpl();
    const authService = new AuthServiceImpl(authRepo);
    const response = yield authService.Register(payload);
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFail(error));
    yield put(setError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(REGISTER, register);
}

export default authSaga;
