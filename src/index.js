import "babel-polyfill"
import express from "express";
    // We ignore express and other external modules w/ webpack-node-externals module, saving us development time...
import renderer from "./utils/renderer";
import createStore from "./utils/createStore";

const app = express();
const port = 8081;

app.use(express.static("public"));

app.get("*", (req,res) => {
    const store = createStore();
    res.send(renderer(req, store)); // Pass req to the renderer to let it figure out what the base path is (it will only ever be '/')...
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});