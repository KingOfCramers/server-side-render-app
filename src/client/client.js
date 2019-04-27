import "babel-polyfill"
// Startup point for our client side app... NO SERVER-SIDE CODE!!!
// This rehydrates our existing, server-side rendered html with our Javascript.
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Routes from "./components/Routes";

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>, 
    document.querySelector("#root")
); // Re-render Routes into root div (using router, which is BrowserRouter)...
