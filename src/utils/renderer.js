// The renderer is a pure function that returns our html.
// It accepts our req object, and the redux store that's created in createStore.js
// It runs renderToString, turning everything into html, and serves that up as our skeleton... 
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/components/Routes";
import { Provider } from 'react-redux';

export default (req, store) => {
    const content = renderToString( // The html skeleton of our app (without javascript). Render to string removes it... And context is a mandatory prop.
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const html = `<html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src='bundle.js'></script>
        </body>
    </html>`

    return html;  
};