import { put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { GET_DASHBOARD_DATA } from "./actionTypes";
import { getDashboardDataFail, getDashboardDataSuccess } from "./actions";

import { DashboardRepositoryImpl } from "core/infrastructure/Dashboard/DashboardRepositoryImpl";
import { DashboardServiceImpl } from "core/usecases/Dashboard/DashboardService";
import { setError } from "store/actions";

function* fetchDashboardData({ payload }) {
  try {
    const DashboardRepo = new DashboardRepositoryImpl();
    const DashboardService = new DashboardServiceImpl(DashboardRepo);
    const response = yield DashboardService.GetDashboardData(payload);
    yield put(getDashboardDataSuccess(response));
  } catch (error) {
    yield put(getDashboardDataFail(error));
    yield put(setError(error));
  }
}

function* DashboardSaga() {
  yield takeEvery(GET_DASHBOARD_DATA, fetchDashboardData);
}

export default DashboardSaga;
