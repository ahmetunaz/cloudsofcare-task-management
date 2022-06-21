import { put, takeEvery } from "redux-saga/effects";

import { CaseRepositoryImpl } from "core/infrastructure/Case/CaseRepositoryImpl";
import { CaseServiceImpl } from "core/usecases/Case/CaseService";

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
    const caseRepo = new CaseRepositoryImpl();
    const caseService = new CaseServiceImpl(caseRepo);
    const response = yield caseService.Login(payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFail(error));
    yield put(setError(error));
  }
}

function* register({ payload }) {
  try {
    const caseRepo = new CaseRepositoryImpl();
    const caseService = new CaseServiceImpl(caseRepo);
    const response = yield caseService.Register(payload);
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFail(error));
    yield put(setError(error));
  }
}

function* caseSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(REGISTER, register);
}

export default caseSaga;
