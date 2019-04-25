import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();
const port = 8081;

app.use(express.static('public'));

app.get("/", (req,res) => {
    const content = renderToString(<Home />); // The html skeleton of our app (without javascript). Render to string removes it...
    const html = `
    <html>
        <head>
        </head>
        <body>
            <div id='root'>${content}</div>
            <script src='bundle.js'></script>
        </body>
    </html>
    `
    res.send(html);
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});