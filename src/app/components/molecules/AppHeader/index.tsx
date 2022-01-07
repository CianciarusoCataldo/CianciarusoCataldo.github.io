import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { HomeIcon, BurgerIcon, IMAGES } from "assets/images";

import { driveWithDarkMode } from "api/helpers/ui-helper";

import { requestRoute } from "api/core/store/internal-slices/router/actions";
import { openDrawer } from "api/core/store/internal-slices/ui/actions";

import {
  getAppName,
  getHomePage,
} from "api/core/store/internal-slices/config/selectors";
import { isHomePage } from "api/core/store/internal-slices/ui/selectors";

import { Button, Header, Link } from "@cianciarusocataldo/modular-ui";
import LanguageSelector from "../LanguageSelector";

/** Custom Modular-app header */
const AppHeader = () => {
  const dispatch = useDispatch();
  const APP_NAME = useSelector(getAppName);
  const hideHomeButton = useSelector(isHomePage);
  const HOME = useSelector(getHomePage);
  const CustomHeader = driveWithDarkMode(Header);

  return (
    <CustomHeader>
      <div className="flex flex-row items-center mt-14 mb-5 ml-1">
        <LanguageSelector />
        <Button
          aria-label="back button"
          onClick={() => {
            dispatch(requestRoute(HOME));
          }}
          unstyled
          className={classNames(
            "fixed top-0 overflow-auto py-0 ml-1 mr-3 mt-1 outline-none",
            {
              hidden: hideHomeButton,
            }
          )}
        >
          {HomeIcon}
        </Button>
        <Button
          aria-label="drawer button"
          onClick={() => {
            dispatch(openDrawer());
          }}
          unstyled
          className="inline-flex py-0 outline-none"
        >
          <div className="p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2">{BurgerIcon}</div>
        </Button>

        <div className="m-auto flex flex-row text-white">
          <div className="m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2">
            {IMAGES.PROFILE.SMALL}
          </div>
          <div className="flex flex-col m-auto mb-3">
            <div className="m-auto">
              <Link newTab unstyled to="https://github.com/CianciarusoCataldo">
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl">
                  {APP_NAME}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CustomHeader>
  );
};

export default AppHeader;
