import { ThunkAction, Action } from "@reduxjs/toolkit";
import { RouterState } from "../../state-slices/router/types";
import { UIState } from "../../state-slices/ui/types";

export interface RootState {
  router: RouterState;
  ui: UIState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface RootAction {
  type: string;
  payload?: any;
  error?: boolean;
}
