const engineConfig = {
  appName: "Cataldo Cianciaruso - Portfolio Page",
  redux: {
    modal: true,
    ui: true,
    epics: [],
    reducers: {},
    preload: {},
    darkMode: true,
  },
  router: {
    pages: {
      Info: "/info",
      Projects: "/projects",
    },
  },
  i18n: {
    fallbackLanguage: "en",
    supportedLanguages: ["en", "it", "es", "fr", "de"],
    namespaces: ["home-page", "projects", "info", "work", "education"],
    pagesNamespace: "pages",
    modalsNamespace: "modals",
  },
};

export default engineConfig;
