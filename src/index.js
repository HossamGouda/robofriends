import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./container/App";
import "./index.css";
import {searchRobots} from "./reducers";
import "tachyons";

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
