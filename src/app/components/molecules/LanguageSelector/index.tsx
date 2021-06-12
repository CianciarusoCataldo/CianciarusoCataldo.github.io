import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import LANGUAGES_MAP from "api/constants/languages";
import { LANGUAGES_ICONS } from "assets/images";

import { changeLanguage } from "api/state-slices/ui/actions";

import { getLanguage } from "api/state-slices/ui/selectors";

import Dropdown from "../Dropdown";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const changeLanguageAction = useCallback(
    (language: SupportedLanguage) => dispatch(changeLanguage(language)),
    [dispatch]
  );
  const language = useSelector(getLanguage);

  return (
    <Dropdown
      className="text-sm"
      defaultValue={
        <div className="flex flex-row text-lg">
          {LANGUAGES_ICONS[language]}
          <div className="ml-1">{language}</div>
        </div>
      }
      content={Object.keys(LANGUAGES_MAP).map((lang) => ({
        name: lang,
        action: () => changeLanguageAction(lang as SupportedLanguage),
        icon: LANGUAGES_ICONS[lang as SupportedLanguage],
      }))}
    />
  );
};
export default LanguageSelector;
