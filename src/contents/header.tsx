import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";

import {
  BurgerIcon,
  DarkModeIcon,
  LANGUAGES_ICONS,
  LightModeIcon,
} from "assets/images";

import { IMAGES } from "assets/images/custom";

import { useCallback } from "react";

import {
  changeLanguage,
  getHomePage,
  getLanguage,
  isHomePage,
  isInDarkMode,
  openDrawer,
  requestRoute,
  setDarkMode,
} from "@cianciarusocataldo/modular-engine";

import { Button, Dropdown, Link, Toggle } from "@cianciarusocataldo/modular-ui";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const hideHomeButton = useSelector(isHomePage);
  const HOME = useSelector(getHomePage);
  const dark = useSelector(isInDarkMode);
  const darkModeSwitch = useCallback(() => {
    dispatch(setDarkMode(!dark));
  }, [dispatch, dark]);
  const language = useSelector(getLanguage);
  const LANGUAGES = Object.keys(LANGUAGES_ICONS);

  return (
    <div className="flex flex-col">
      <div
        className="mb-2 flex flex-col"
        style={{
          alignItems: "flex-end",
        }}
      >
        <div className="fixed flex flex-row">
          <Dropdown
            className="p-0"
            dark={false}
            value={LANGUAGES.findIndex((lang) => lang === language)}
            shadow
            onChange={(lang: number) => {
              dispatch(changeLanguage(LANGUAGES[lang]));
            }}
            content={Object.keys(LANGUAGES_ICONS).map((lang) => ({
              name: lang,
              icon: LANGUAGES_ICONS[lang],
            }))}
          />
          <Toggle
            onIcon={LightModeIcon}
            offIcon={DarkModeIcon}
            shadow
            dark={dark}
            value={!dark}
            onChange={darkModeSwitch}
            className="mx-1"
          />
        </div>
      </div>
      <div className="flex flex-row mt-12">
        <div className="my-auto">
          <Button
            aria-label="drawer button"
            onClick={() => {
              dispatch(openDrawer());
            }}
            unstyled
            className="outline-none"
          >
            <div className="p-1 sm:p-2 md:p-2">{BurgerIcon}</div>
          </Button>
        </div>
        <div className="my-auto">
          <Button
            aria-label="back button"
            onClick={() => {
              dispatch(requestRoute(HOME));
            }}
            unstyled
            className="overflow-auto ml-1 outline-none"
            hide={hideHomeButton}
          >
            <svg
              className={classNames(
                {
                  "fill-[white]": dark,
                  "fill-[black]": !dark,
                },
                "w-8 h-8 hover:fill-[#ff9f51] active:fill-[#fb7a10] xsm:w-12 xsm:h-12"
              )}
              viewBox="0 0 11 18"
            >
              <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
              <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
            </svg>
          </Button>
        </div>
        <div className="m-auto flex flex-row p-2">
          <div className="mr-2 my-auto"> {IMAGES.PROFILE.SMALL}</div>
          <div className="flex flex-col my-auto">
            <Link dark={dark} newTab to="https://github.com/CianciarusoCataldo">
              <p className="break-words text-lg sm:text-xl md:text-2xl lg:text-4xl">
                Cataldo Cianciaruso
              </p>
            </Link>
            <Link dark={dark} newTab to="https://github.com/CianciarusoCataldo">
              <p className="break-words text-md sm:text-lg md:text-xl lg:text-3xl">
                Portfolio page
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
