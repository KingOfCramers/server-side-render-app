import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/components/Routes";

export default (req) => {
    const content = renderToString( // The html skeleton of our app (without javascript). Render to string removes it... And context is a mandatory prop.
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
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