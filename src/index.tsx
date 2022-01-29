import "assets/styles/styles.output.css";

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker
    .register("./serviceWorker.js", { scope: "/" })
    .then(
      function () {
        console.log("Service worker registration succeeded");
      },
      /*catch*/ function () {
        console.log("Service worker registration failed");
      }
    );
} else {
  console.log("Service workers are not supported.");
}

import("@cianciarusocataldo/modular").then(({ initApplication }) => {
  initApplication((App) => {
    import("react-dom").then(({ render }) => {
      render(App, document.getElementById("root"));
      let Preloader = document.getElementById("preloader");
      if (Preloader) Preloader.style.visibility = "hidden";
    });
  });
});
