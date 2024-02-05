import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";

import {
  BurgerIcon,
  DarkModeIcon,
  LANGUAGES_ICONS,
  LightModeIcon,
} from "assets/images";

import { IMAGES } from "assets/images/custom";

import {
  changeLanguage,
  getHomePage,
  getLanguage,
  isHomePage,
  isInDarkMode,
  goTo,
  setDarkMode,
  openDrawer,
} from "mobrix-engine-plugins";

import { getAppName } from "mobrix-engine-tools";
import { Button, Container, Dropdown, Link, Toggle } from "mobrix-ui";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const APP_NAME: string = useSelector(getAppName);
  const hideHomeButton: boolean = useSelector(isHomePage);
  const HOME = useSelector(getHomePage);
  const dark: boolean = useSelector(isInDarkMode);

  const language = useSelector(getLanguage);
  const LANGUAGES = Object.keys(LANGUAGES_ICONS);

  return (
    <Container dark={dark}>
      <div className="flex flex-col pb-4">
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          <div className="flex flex-row">
            <Dropdown
              className="p-0"
              dark={false}
              value={LANGUAGES.findIndex((lang) => lang === language)}
              shadow
              onChange={(lang: number) => {
                dispatch(changeLanguage(LANGUAGES[lang]));
              }}
              elements={Object.keys(LANGUAGES_ICONS).map((lang) => (
                <div className="flex flex-row">
                  {lang}
                  <div className="ml-2 my-auto">{LANGUAGES_ICONS[lang]}</div>
                </div>
              ))}
            />
            <Toggle
              onIcon={LightModeIcon}
              offIcon={DarkModeIcon}
              shadow={false}
              dark={dark}
              value={!dark}
              onChange={() => {
                dispatch(setDarkMode(!dark));
              }}
              className="mx-1"
            />
          </div>
        </div>
        <div className="flex flex-row mt-6">
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
                dispatch(goTo(HOME));
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
              <Link
                dark={dark}
                newTab
                to="https://github.com/CianciarusoCataldo/mobrix-ui"
              >
                <p className="break-words text-lg sm:text-xl md:text-2xl lg:text-4xl">
                  {APP_NAME}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderContent;
