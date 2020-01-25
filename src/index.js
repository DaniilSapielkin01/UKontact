import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
 
// import DatePicker from "antd";
import "antd/dist/antd.css";

import App from "./App";
import "./index.css";
import { store } from "./redux/ReduxStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
