import {
  epicsPlugin,
  localizationPlugin,
  modalPlugin,
  routerPlugin,
  themerPlugin,
  uiPlugin,
  urlCheckerPlugin,
} from "mobrix-engine-plugins";

const engineConfig = {
  plugins: [
    localizationPlugin,
    epicsPlugin,
    routerPlugin,
    modalPlugin,
    themerPlugin,
    uiPlugin,
    urlCheckerPlugin,
  ],
  appName: "Cataldo Cianciaruso - Portfolio Page",
  ui: {
    drawer: true,
    darkMode: true,
  },
  router: {
    homePage: "Home",
    routes: {
      Home: "/",
      Projects: "/projects",
    },
  },
  localization: {
    fallbackLanguage: "en",
    supportedLanguages: ["en", "it", "es", "fr", "de"],
    namespaces: ["home-page", "projects", "work", "education"],
    titlesNamespace: "page-title",
  },
  theme: {
    default: {
      bodyColor: "linear-gradient(175deg, rgba(219,224,255,1) 0%, rgba(241,243,254,1) 59%, rgba(104,140,182,0.9948354341736695))",
      uiColor: "",
    },
    dark: {
      uiColor: "linear-gradient(175deg, rgba(22,16,40,1) 0%, rgba(20,14,37,1) 29%, rgba(28,20,57,1) 59%)",
      bodyColor: "radial-gradient(circle, rgba(67,51,108,1) 0%, rgba(60,45,102,1) 29%, rgba(51,37,103,1) 59%)",
    },
  },
};

export default engineConfig;
