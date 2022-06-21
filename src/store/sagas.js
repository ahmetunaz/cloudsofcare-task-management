import { all, fork } from "redux-saga/effects";

//public
import LayoutSaga from "./layout/saga";
import AuthSaga from "./auth/saga";
import CaseSaga from "./case/saga";
import TaskSaga from "./task/saga";
import UserSaga from "./user/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AuthSaga),
    fork(CaseSaga),
    fork(TaskSaga),
    fork(UserSaga),
  ]);
}
