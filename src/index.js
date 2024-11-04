import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {thunk} from "redux-thunk"; // Correct import here
import {createLogger} from "redux-logger";
import App from "./container/App";
import "./index.css";
import {searchRobots, requestRobots} from "./reducers";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
