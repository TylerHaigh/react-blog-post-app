import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import {BrowserRouter, Route} from 'react-router-dom'

import reducers from './reducers/index.reducer';
import PostsIndex from "./components/posts.component";

const createStoreWithMiddleware = applyMiddleware()(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
      <BrowserRouter>
        <div>
          <Route path="/" component={PostsIndex} />
        </div>
      </BrowserRouter>
    </Provider>,
  document.querySelector(".container")
);


// npm install --save react-router-dom@4.0.0