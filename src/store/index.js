import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const createReduxStore = () => {
  let devtools = null;
  const persistConfig = {
    key: "root",
    blacklist: ["content", "Chat"],
    storage,
  };

  if (
    process.env.NODE_ENV !== "production" &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = devtools || compose;
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

const store = createReduxStore();

export default store;
