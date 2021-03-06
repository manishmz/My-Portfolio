import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer } from "mdbreact";
ReactDOM.render(
  <MDBContainer fluid>
    <App />
  </MDBContainer>,
  document.getElementById("root")
);

serviceWorker.unregister();
