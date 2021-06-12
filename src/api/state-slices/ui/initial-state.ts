import LANGUAGES_MAP from "api/constants/languages";
import { UIState } from "./types";

const UI_INITIAL_STATE: UIState = {
  isDrawerOpen: false,
  isHomePage: true,
  language: Object.keys(LANGUAGES_MAP).includes(
    navigator.language.split("-")[0]
  )
    ? (navigator.language.split("-")[0] as SupportedLanguage)
    : LANGUAGES_MAP.en,
};

export default UI_INITIAL_STATE;
