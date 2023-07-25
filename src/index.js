import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Particle from "./Particles";

ReactDOM.render(
  <React.StrictMode>
    <>
    <App/>
    <Particle />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
