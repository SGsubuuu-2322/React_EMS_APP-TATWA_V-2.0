// import React from "react";
// These are the some of the common imports for creating the main root element in the DOM...
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// This is  for hookking up the routing feature of React in functional components...
import { BrowserRouter } from "react-router-dom";
// import Context from "./Utils/Context.jsx";
// These two imports are for hooking up the single centralized store for our app created using redux and providing it to app component...
import { Provider } from "react-redux";
import store from "./Store.js";


// This is for creating a new root element in DOM and rendering it....
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Context>
  // These are for wrapping the root component with necessary data and rendering it...

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </Context>

  // </React.StrictMode>,
);
