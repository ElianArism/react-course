import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./components/App";
// import { FirstApp } from "./components/FirstApp";
import { Counter } from "./components/Counter";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Counter value={10}></Counter>
  </React.StrictMode>
);
