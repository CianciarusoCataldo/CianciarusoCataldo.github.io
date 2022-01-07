import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestRoute } from "api/core/store/internal-slices/router/actions";
import { closeDrawer } from "api/core/store/internal-slices/ui/actions";
import {
  isDrawerOpen,
  isInDarkMode,
} from "api/core/store/internal-slices/ui/selectors";
import {
  getHomePage,
  getPages,
} from "api/core/store/internal-slices/config/selectors";

import { Drawer } from "@cianciarusocataldo/modular-ui";
import { usePageTitlesTranslation } from "app/hooks/localization";

/** Custom Modular-app laguage drawer */
const AppDrawer = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getPages);
  const isDrawerShowing = useSelector(isDrawerOpen);
  const darkMode = useSelector(isInDarkMode);
  const HOME = useSelector(getHomePage);
  const t = usePageTitlesTranslation();

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
          isActiveCallback: () =>
            window.location.pathname === HOME ||
            window.location.pathname.substring(
              0,
              window.location.pathname.length - 1
            ) === HOME ||
            `${window.location.pathname}/` === HOME,
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
              isActiveCallback: () =>
                window.location.pathname === PATHS[route] ||
                window.location.pathname.substring(
                  0,
                  window.location.pathname.length - 1
                ) === PATHS[route] ||
                `${window.location.pathname}/` === PATHS[route],
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
