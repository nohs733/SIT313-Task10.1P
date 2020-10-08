import React from "react";
import ReactDOM from "react-dom";
import IndexRouter from "./routers/IndexRouter";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import "./css/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();


const routerAndStore = (
  <Provider store={store}>
    <IndexRouter />
  </Provider>
);

ReactDOM.render(routerAndStore, document.getElementById("root"));

serviceWorker.unregister();
