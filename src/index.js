import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import ScrollToTop from "./components/hooks/useScrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
  document.getElementById("root")
);
