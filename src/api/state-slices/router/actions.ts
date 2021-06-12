import { createAction } from "@reduxjs/toolkit";

export const goBack = createAction("@@router/GO_BACK");

export const requestRoute = createAction(
  "@@router/REQUEST_ROUTE",
  (route: RouteKey) => ({
    payload: route,
  })
);

export const replaceRoute = createAction(
  "@@router/REPLACE_ROUTE",
  (route: RouteKey) => ({
    payload: route,
  })
);

export const locationChange = createAction("@@router/LOCATION_CHANGE");
