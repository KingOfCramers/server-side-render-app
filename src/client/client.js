// Startup point for our client side app... NO SERVER-SIDE CODE!!!
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>, 
    document.querySelector("#root")
); // Re-render Routes into root div (using router, which is BrowserRouter)...