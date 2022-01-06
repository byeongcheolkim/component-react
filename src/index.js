import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import "./scss/main.scss";
import App from "./App";

(async () => {
  const commonConfigPro = await fetch("./env/common.config.json");
  window.COMMON_CONFIG = await commonConfigPro.json();

  render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById("root")
  );
})();
