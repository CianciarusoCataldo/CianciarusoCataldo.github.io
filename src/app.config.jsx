import React from "react";

import { createMoBrixDesignerPlugin } from "mobrix-designer-tools";

import { pageRouterPlugin } from "mobrix-designer-plugin-router";

import DrawerComponent from "components/Drawer";
import footer from "contents/footer";
import header from "contents/header";
import content from "contents/content";
import "assets/styles";

const drawerPlugin = createMoBrixDesignerPlugin("custom-drawer", () => ({
  externalComponent: DrawerComponent,
}));

const appConfig = {
  plugins: [drawerPlugin, pageRouterPlugin],
  preloader: () => <div className="preloader" />,
  pageRouter: {
    render: (route) => React.lazy(() => import(`./pages/${route}`)),
  },
  header,
  footer,
  content,
};

export default appConfig;
