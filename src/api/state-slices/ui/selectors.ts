import { createSelector } from "reselect";

import { UIState } from "./types";

import { RootState } from "api/core/types/store-types";

export const getUIView = createSelector(
  (state: RootState): UIState => state.ui,
  (uiState) => uiState
);

export const isHomePage = createSelector(
  getUIView,
  ({ isHomePage }) => isHomePage
);

export const getLanguage = createSelector(
  getUIView,
  ({ language }) => language
);
