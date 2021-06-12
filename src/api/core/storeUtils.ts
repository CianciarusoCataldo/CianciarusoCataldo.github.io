import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";
import {
  createReduxHistory,
  routerMiddleware,
} from "api/state-slices/router/reducer";

import { RootAction } from "api/core/types/store-types";

import { REDUCERS, INITIAL_STATES } from "api/core/reducers";

import epics from "api/core/epics";

export const rootReducer = combineReducers(REDUCERS);

const initStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: INITIAL_STATES,
    middleware: [epicMiddleware, routerMiddleware],
    devTools: process.env.NODE_ENV === "development",
  });

  epicMiddleware.run(combineEpics<Epic<RootAction, RootAction>>(...epics));

  return store;
};

export const store = initStore();

export const history = createReduxHistory(store);
