import { createAction } from "@reduxjs/toolkit";
import LANGUAGES_MAP from "api/constants/languages";

export const openDrawer = createAction("@@ui/OPEN_DRAWER");
export const closeDrawer = createAction("@@ui/CLOSE_DRAWER");
export const checkRoute = createAction("@@ui/CHECK_ROUTE");

export const changeLanguage = createAction(
  "@@ui/CHANGE_LANGUAGE",
  (lang: SupportedLanguage) => ({
    payload: {
      language: LANGUAGES_MAP[lang],
    },
  })
);

export const languageChanged = createAction("@@ui/LANGUAGE_CHANGED");
