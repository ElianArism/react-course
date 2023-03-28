import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import { TodoApp } from "./TodoApp";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
