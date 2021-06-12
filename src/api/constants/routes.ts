import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const ROUTES: Record<RouteKey, RouteProps & { name: string; path: string }> = {
  HOME: {
    component: lazy(() => import("app/pages/HomePage")),
    exact: true,
    name: "overview_title",
    path: "/",
  },
  PROJECTS: {
    component: lazy(() => import("app/pages/ProjectsPage")),
    exact: true,
    name: "projects_title",
    path: "/projects",
  },
  INFO: {
    component: lazy(() => import("app/pages/InfoPage")),
    exact: true,
    name: "About",
    path: "/about",
  },
};

export default ROUTES;
