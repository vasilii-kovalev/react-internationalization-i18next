import * as React from "react";
import ReactDOM from "react-dom";

import "./i18n";
import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
