import { Epic, ofType } from "redux-observable";
import { filter, map, withLatestFrom } from "rxjs/operators";
import { goBack, push } from "redux-first-history";

import { RootAction, RootState } from "api/core/types/store-types";

import ROUTES from "../../constants/routes";
import { PAGE_NAMES } from "../../constants/static-content";

import { checkRoute } from "../ui/actions";

import {
  goBack as goBackAction,
  requestRoute,
  locationChange,
} from "./actions";
import { getLanguage } from "../ui/selectors";
import { APP_NAME } from "api/constants/static-content";

export const requestRouteEpic: Epic<RootAction, RootAction, RootState> = (
  action$
) => {
  return action$.pipe(
    filter(requestRoute.match),
    map((action) => {
      return push(ROUTES[action.payload].path);
    })
  );
};

export const locationChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => {
  return action$.pipe(
    ofType(locationChange.type),
    withLatestFrom(state$),
    map(([action, state]) => {
      Object.keys(ROUTES).forEach((route) => {
        if (
          ROUTES[route as RouteKey].path === action.payload.location.pathname
        ) {
          window.document.title = `${APP_NAME} - ${
            PAGE_NAMES[getLanguage(state)][route as RouteKey]
          }`;
        }
      });
      return checkRoute();
    })
  );
};

export const goBackEpic: Epic<RootAction, RootAction, RootState> = (
  action$
) => {
  return action$.pipe(
    filter(goBackAction.match),
    map((action) => {
      return goBack(action.payload);
    })
  );
};
