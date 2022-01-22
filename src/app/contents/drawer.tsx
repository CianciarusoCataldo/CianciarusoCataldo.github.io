import classNames from "classnames";

import {
  closeDrawer,
  getHomePage,
  geti18nConfig,
  getPages,
  isInDarkMode,
  requestRoute,
} from "@cianciarusocataldo/modular-engine";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, Divider, DrawerElement } from "@cianciarusocataldo/modular-ui";

export const DrawerLogo = () => <div/>;

export const DrawerContent = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getPages);
  const I18N = useSelector(geti18nConfig);
  const HOME = useSelector(getHomePage);
  const dark = useSelector(isInDarkMode);
  const { t } = useTranslation(I18N.PAGES_NAMESPACE);

  const ALL_PATHS: Record<string, string> = { ...PATHS, HOME_PAGE: HOME };

  return (
    <div>
      {Object.keys(ALL_PATHS)
        .sort()
        .map((route, index) => {
          return (
            <div className="mt-1 mb-3" key={`drawer_app_element_${index}`}>
              <Button
                unstyled
                onClick={() => {
                  dispatch(requestRoute(ALL_PATHS[route]));
                  dispatch(closeDrawer());
                }}
                className={classNames(
                  {
                    "text-white": dark,
                    "text-gray-600": !dark,
                  },
                  "hover:text-orange-500 text-xl"
                )}
              >
                {t(route)}
              </Button>
              <Divider dark={dark} />
            </div>
          );
        })}
    </div>
  );
};

export const DrawerElements: DrawerElement = [];
