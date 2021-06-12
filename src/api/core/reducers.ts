import { Reducer } from "@reduxjs/toolkit";
import { RootState } from "./types/store-types";

import routerReducer from "api/state-slices/router/reducer";
import uiReducer from "api/state-slices/ui/reducer";
import ROUTER_INITIAL_STATE from "api/state-slices/router/initial-state";
import UI_INITIAL_STATE from "api/state-slices/ui/initial-state";

export const REDUCERS: Record<keyof RootState, Reducer<any, any>> = {
  router: routerReducer,
  ui: uiReducer,
};

export const INITIAL_STATES: RootState = {
  router: ROUTER_INITIAL_STATE,
  ui: UI_INITIAL_STATE,
};

export default REDUCERS;
