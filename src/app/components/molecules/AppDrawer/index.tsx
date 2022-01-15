import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  closeDrawer,
  getHomePage,
  geti18nConfig,
  getPages,
  isActualRoute,
  isDrawerOpen,
  isInDarkMode,
  requestRoute,
} from "@cianciarusocataldo/modular-engine";

import { Drawer } from "@cianciarusocataldo/modular-ui";
import { useTranslation } from "react-i18next";

/** Custom Modular-app laguage drawer */
const AppDrawer = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getPages);
  const I18N = useSelector(geti18nConfig);
  const isDrawerShowing = useSelector(isDrawerOpen);
  const darkMode = useSelector(isInDarkMode);
  const HOME = useSelector(getHomePage);
  const { t } = useTranslation(I18N.PAGES_NAMESPACE || "page-titles");

  React.useEffect(() => {
    if (isDrawerShowing) {
      let element = document.getElementById("modular-drawer");

      document.getElementById("app-container")!.onclick = function (e: Event) {
        if (element && !element.contains(e.target as Node)) {
          dispatch(closeDrawer());
        }
      };
    } else {
      document.getElementById("app-container")!.onclick = null;
    }
  }, [dispatch, isDrawerShowing]);

  return (
    <Drawer
      dark={darkMode}
      hide={!isDrawerShowing}
      elements={[
        {
          text: t("HOME_PAGE"),
          actionCallback: () => {
            dispatch(requestRoute(HOME));
            dispatch(closeDrawer());
          },
          isActiveCallback: () => isActualRoute(HOME),
        },
        ...Object.keys(PATHS)
          .sort()
          .map((route) => {
            return {
              text: t(route),
              actionCallback: () => {
                dispatch(requestRoute(PATHS[route]));
                dispatch(closeDrawer());
              },
              isActiveCallback: () => isActualRoute(PATHS[route]),
            };
          }),
      ]}
      onClose={() => {
        dispatch(closeDrawer());
      }}
    />
  );
};

export default AppDrawer;
