import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "api/core/i18n";

import "assets/styles/styles.output.css";

import { PRELOADED_IMAGES } from "assets/images/index";

import { store } from "api/core/storeUtils";

import App from "app/components/organisms/App";

PRELOADED_IMAGES.forEach((imagePath) => {
  const newImage = new Image();
  newImage.src = imagePath;
});

const render = (Component: typeof App) =>
  ReactDOM.render(
    <React.Suspense fallback={<div className="preloader" />}>
      <Provider store={store}>
        <Component />
      </Provider>
    </React.Suspense>,
    document.getElementById("root")
  );

render(App);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((r) => {
    if (r.length > 0) {
      r[0].unregister();
    }
  });

  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register("./serviceWorker.js").then(
    function (registration) {
      console.log("Service worker registration succeeded:");
    },
    /*catch*/ function () {
      console.log("Service worker registration failed:");
    }
  );
} else {
  console.log("Service workers are not supported.");
}

let Preloader = document.getElementById("preloader");
if (Preloader) Preloader.style.visibility = "hidden";

if (module.hot) {
  module.hot.accept("./app/components/organisms/App", () => {
    const NextApp = require("./app/components/organisms/App").default;
    render(NextApp);
    var elem = document.getElementById("preloader");
    elem?.parentNode?.removeChild(elem);
  });
}
