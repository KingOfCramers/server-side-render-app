// Startup point for our client side app... NO SERVER-SIDE CODE!!!
// console.log('Hi there! This is a change to the front end bro! It reloads automatically.');
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

ReactDOM.hydrate(<Home/>, document.querySelector('#root')); // Re-render app into root div...