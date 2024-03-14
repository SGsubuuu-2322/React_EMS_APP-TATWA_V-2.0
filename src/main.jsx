// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import Context from "./Utils/Context.jsx";
import { Provider } from "react-redux";
import store from "./Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Context>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </Context>

  // </React.StrictMode>,
);
