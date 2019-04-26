import "babel-polyfill"
// Startup point for our client side app... NO SERVER-SIDE CODE!!!
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";

import Routes from "./components/Routes";

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>, 
    document.querySelector("#root")
); // Re-render Routes into root div (using router, which is BrowserRouter)...