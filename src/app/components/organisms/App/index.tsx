import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";

import IMAGES from "assets/images";

import { history } from "api/core/storeUtils";

import { Drawer, Header } from "app/components/molecules";
import QuickLinks from "app/components/molecules/QuickLinks";
import ROUTES from "api/constants/routes";

const App = () => {
  return (
    <div id="app-container" className="overscroll-auto">
      <Header logo={IMAGES.PROFILE.SMALL} />
      <QuickLinks />
      <Drawer />
      <div className="mt-52 md:mt-56 lg:mt-56 xl:mt-56 2xl:mt-56">
        <Router history={history}>
          <Switch>
            {Object.keys(ROUTES).map((route) => {
              const routeKey = route as RouteKey;

              return (
                <Route
                  key={ROUTES[routeKey].path}
                  component={ROUTES[routeKey].component}
                  exact={ROUTES[routeKey].exact}
                  path={ROUTES[routeKey].path}
                />
              );
            })}
            <Redirect to={ROUTES.HOME.path} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
