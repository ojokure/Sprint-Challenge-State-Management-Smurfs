import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import * as reducers from "./state/reducers";


const superReducer = combineReducers({
    data : reducers.dataReducer
    });

const store = createStore(
    superReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



