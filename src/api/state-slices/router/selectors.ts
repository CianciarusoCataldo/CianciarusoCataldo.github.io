import { createSelector } from "reselect";

import { RootState } from "api/core/types/store-types";
import { RouterState } from "./types";

import ROUTES from "api/constants/routes";
import { PAGE_NAMES } from "api/constants/static-content";

import { getLanguage } from "api/state-slices/ui/selectors";

export const getRouterView = (state: RootState): RouterState => state.router;

export const getPathName = createSelector(
  getRouterView,
  ({ location }) => location.pathname
);

export const getPageName = createSelector(
  getPathName,
  getLanguage,
  (path, language) => {
    const route = Object.keys(ROUTES).find(
      (routeKey) => ROUTES[routeKey as RouteKey].path === path
    );
    console.log(route);
    return PAGE_NAMES[language as SupportedLanguage][route as RouteKey];
  }
);
