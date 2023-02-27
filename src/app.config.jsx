import React from "react";

import { formsPlugin } from "mobrix-designer-plugin-forms";
import { drawerPlugin } from "mobrix-designer-plugin-drawer";
import { pageRouterPlugin } from "mobrix-designer-plugin-router";

import { DrawerContent } from "contents/drawer";
import footer from "contents/footer";
import header from "contents/header";

const appConfig = {
  plugins: [drawerPlugin, pageRouterPlugin, formsPlugin],
  preloader: () => <div className="preloader" />,
  pageRouter: {
    render: (route) => React.lazy(() => import(`./pages/${route}`)),
  },
  forms: {
    modals: {},
  },
  header,
  footer,
  drawer: {
    content: DrawerContent,
  },
};

export default appConfig;
