import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from './components/app.component'

ReactDOM.render(
    <App />,
  document.querySelector(".container")
);
