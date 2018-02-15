import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from './components/app.component'
import reducers from './reducers/index.reducer';

ReactDOM.render(
    <Provider store={createStore(reducers)} >
      <App />
    </Provider>,
  document.querySelector(".container")
);


// npm install --save react-router-dom@4.0.0