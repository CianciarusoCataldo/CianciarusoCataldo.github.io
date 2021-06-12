import { LANGUAGES_MAP } from "../../constants/languages";

export interface UIState {
  isDrawerOpen: boolean;
  isHomePage: boolean;
  language: SupportedLanguage;
}
