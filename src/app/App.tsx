import { lazy } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { History } from "history";

import { getHomePage, getPages } from "@cianciarusocataldo/modular-engine";

import AppHeader from "./components/molecules/AppHeader";
import AppDrawer from "./components/molecules/AppDrawer";
import AppModal from "./components/molecules/AppModal";
import QuickLinks from "./components/molecules/QuickLinks";

/** Modular-app main component */
const App = ({ history }: { history: History }) => {
  const PAGES = useSelector(getPages);
  const HOME = useSelector(getHomePage);

  return (
    <div id="app-container">
      <AppModal />
      <AppHeader />
      <AppDrawer />
      <div style={{ marginTop: "12rem", marginBottom: "3rem" }}>
        <Router history={history}>
          <Switch>
            <Route
              component={lazy(() => import("./pages/HOME_PAGE"))}
              key="HOME_PAGE"
              exact
              path={HOME}
            />
            {Object.keys(PAGES).map((route) => (
              <Route
                component={lazy(() => import(`./pages/${route}`))}
                key={route}
                exact
                path={PAGES[route]}
              />
            ))}
            <Redirect to={HOME} />
          </Switch>
        </Router>
      </div>
      <QuickLinks />
    </div>
  );
};

export default App;
