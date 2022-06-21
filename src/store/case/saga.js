import { put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import {
  CREATE_CASE,
  DELETE_CASE,
  GET_CASE,
  GET_CASES,
  UPDATE_CASE,
} from "./actionTypes";
import {
  getCaseSuccess,
  getCaseFail,
  getCasesSuccess,
  getCasesFail,
  createCaseSuccess,
  createCaseFail,
  updateCaseSuccess,
  updateCaseFail,
  deleteCaseSuccess,
  deleteCaseFail,
  resetStatus,
  resetState,
} from "./actions";

import { CaseRepositoryImpl } from "core/infrastructure/Case/CaseRepositoryImpl";
import { CaseServiceImpl } from "core/usecases/Case/CaseService";
import { setError } from "store/actions";

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}

function* fetchCase({ payload }) {
  try {
    const CaseRepo = new CaseRepositoryImpl();
    const CaseService = new CaseServiceImpl(CaseRepo);
    const response = yield CaseService.GetCase(payload);
    yield put(getCaseSuccess(response));
  } catch (error) {
    yield put(getCaseFail(error));
    yield put(setError(error));
  }
}

function* fetchCases() {
  try {
    const CaseRepo = new CaseRepositoryImpl();
    const CaseService = new CaseServiceImpl(CaseRepo);
    const response = yield CaseService.GetCases();
    yield put(getCasesSuccess(response));
  } catch (error) {
    yield put(getCasesFail(error));
    yield put(setError(error));
  }
}

function* createCase({ payload }) {
  try {
    const CaseRepo = new CaseRepositoryImpl();
    const CaseService = new CaseServiceImpl(CaseRepo);
    const response = yield CaseService.CreateCase(payload);
    yield put(createCaseSuccess(response));
    yield put(resetState(response));
    yield delay(3000);
    yield put(resetStatus(response));
  } catch (error) {
    yield put(createCaseFail(error));
    yield put(setError(error));
  }
}

function* updateCase({ payload }) {
  try {
    const CaseRepo = new CaseRepositoryImpl();
    const CaseService = new CaseServiceImpl(CaseRepo);
    const response = yield CaseService.UpdateCase(payload);
    yield put(updateCaseSuccess(response));
    yield delay(3000);
    yield put(resetStatus(response));
  } catch (error) {
    yield put(updateCaseFail(error));
    yield put(setError(error));
  }
}

function* deleteCase({ payload }) {
  try {
    const CaseRepo = new CaseRepositoryImpl();
    const CaseService = new CaseServiceImpl(CaseRepo);
    const response = yield CaseService.DeleteCase(payload);
    yield put(deleteCaseSuccess(response));
    yield delay(3000);
    yield put(resetStatus());
  } catch (error) {
    yield put(deleteCaseFail(error));
    yield put(setError(error));
  }
}

function* CaseSaga() {
  yield takeEvery(GET_CASE, fetchCase);
  yield takeEvery(GET_CASES, fetchCases);
  yield takeEvery(CREATE_CASE, createCase);
  yield takeEvery(UPDATE_CASE, updateCase);
  yield takeEvery(DELETE_CASE, deleteCase);
}

export default CaseSaga;
