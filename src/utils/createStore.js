// This is where we create our redux store for the server side!

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";

export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return store;
};