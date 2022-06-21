import { all, fork } from "redux-saga/effects";

//public
import LayoutSaga from "./layout/saga";
import AuthSaga from "./auth/saga";
import CaseSaga from "./case/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AuthSaga),
    fork(CaseSaga),
  ]);
}
