import { Epic } from "redux-observable";
import { filter, ignoreElements, tap } from "rxjs/operators";

import { RootAction, RootState } from "api/core/types/store-types";

import i18n from "../../core/i18n";

import { changeLanguage } from "./actions";

export const languageChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
) => {
  return action$.pipe(
    filter(changeLanguage.match),
    tap((action) => {
      i18n.changeLanguage(action.payload.language);
    }),
    ignoreElements()
  );
};
