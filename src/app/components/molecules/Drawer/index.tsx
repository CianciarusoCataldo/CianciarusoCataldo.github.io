import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import IMAGES from "assets/images";

import ROUTES from "api/constants/routes";
import { PAGE_NAMES } from "api/constants/static-content";

import { requestRoute } from "api/state-slices/router/actions";
import { closeDrawer } from "api/state-slices/ui/actions";

import { getLanguage, getUIView } from "api/state-slices/ui/selectors";

import { Button, Divider } from "app/components/atoms";

const Drawer = () => {
  const dispatch = useDispatch();
  const { isDrawerOpen } = useSelector(getUIView);

  const animation = isDrawerOpen
    ? "translate-x-0 ease-in"
    : "-translate-x-full ease-out";

  const language = useSelector(getLanguage);
  const closeDrawerAction = useCallback(() => {
    dispatch(closeDrawer());
  }, [dispatch]);

  useEffect(() => {
    if (isDrawerOpen) {
      let element = document.getElementById("drawer");

      document.getElementById("app-container")!.onclick = function (e: Event) {
        if (element && !element.contains(e.target as Node)) {
          closeDrawerAction();
        }
      };
    } else {
      document.getElementById("app-container")!.onclick = null;
    }
  }, [isDrawerOpen, closeDrawerAction]);

  const routeClickAction = (route: RouteKey) => {
    dispatch(requestRoute(route));
    dispatch(closeDrawer());
  };

  return (
    <div
      id="drawer"
      className={`fixed z-10 shadow-2xl inset-y-0 left-0 top-0 w-auto px-2 py-2 bg-gradient-to-r from-gray-700 to-gray-800 overflow-auto transform ${animation} transition-transform duration-300`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-end mx-1 mb-3">
          <button
            onClick={closeDrawerAction}
            className="text-white text-2xl outline-none focus:outline-none hover:transform hover:text-red-600"
          >
            X
          </button>
        </div>
        <div className="mx-2 px-4 py-3">
          {
            <div className="ml-2 mr-4">
              {Object.keys(ROUTES).map((route) => {
                const isActive =
                  window.location.pathname === ROUTES[route as RouteKey].path;
                const elementClassName = isActive
                  ? "m-auto ml-2 font-bold text-xl text-yellow-600 cursor-default"
                  : "m-auto ml-2 font-bold text-xl text-white hover:text-blue-400 cursor-pointer";
                const routeAction = () => {
                  if (!isActive) {
                    routeClickAction(route as RouteKey);
                  }
                };

                return (
                  <div key={`drawer_element_${route}`} className="mb-3">
                    <Button
                      noStyles
                      id={`drawer_button_${route}`}
                      onClick={routeAction}
                    >
                      <div className="flex flex-row">
                        {IMAGES.PAGES[route as RouteKey]}
                        <div className={elementClassName}>
                          {PAGE_NAMES[language][route as RouteKey]}
                        </div>
                      </div>
                    </Button>
                    <Divider />
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Drawer;
