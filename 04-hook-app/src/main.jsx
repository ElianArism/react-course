import React from "react";
import ReactDOM from "react-dom/client";
import { MainApp } from "./12-useContext/MainApp";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <HooksApp />
  // <TodoApp />
  // use context
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
);
