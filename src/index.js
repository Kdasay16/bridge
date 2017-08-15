import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { StyleSheet, css } from "aphrodite";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const styles = StyleSheet.create({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "sans-serif"
  }
});

ReactDOM.render(
  <App className={css(styles.body)} />,
  document.getElementById("root")
);
registerServiceWorker();
