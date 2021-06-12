import { createSlice, Slice } from "@reduxjs/toolkit";

import { UIState } from "./types";

import ROUTES from "../../constants/routes";
import UI_INITIAL_STATE from "./initial-state";

import { openDrawer, closeDrawer, checkRoute, changeLanguage } from "./actions";

const slice: Slice<UIState> = createSlice({
  name: "ui",
  reducers: {},
  initialState: UI_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(openDrawer, (state) => ({
        ...state,
        isDrawerOpen: true,
      }))

      .addCase(closeDrawer, (state) => ({
        ...state,
        isDrawerOpen: false,
      }))

      .addCase(checkRoute, (state, _) => {
        return {
          ...state,
          isHomePage: window.location.pathname === ROUTES.HOME.path,
        };
      })

      .addCase(changeLanguage, (state, action) => ({
        ...state,
        language: action.payload.language,
      }));
  },
});

export default slice.reducer;
