import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

import NAMESPACES from "api/constants/namespaces";

export const I18N_OPTIONS: InitOptions = {
  fallbackLng: "en",
  supportedLngs: ["en", "es", "fr", "de", "it"],
  lng: navigator.language.split("-")[0],
  debug: false,
  backend: {
    backends: [
      LocalStorageBackend,
      HttpBackend
    ],
    backendOptions: [{
      expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
    }, {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }]
  },
  ns: Object.values(NAMESPACES),
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false },
};

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .use(ChainedBackend)
  .init(I18N_OPTIONS);

export default i18n;
