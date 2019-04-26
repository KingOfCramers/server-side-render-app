import express from "express";
    // We ignore express and other external modules w/ webpack-node-externals module, saving us development time...
import renderer from "./helpers/renderer";

const app = express();
const port = 8081;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.send(renderer(req)); // Pass req to the renderer to let it figure out what the base path is (it will only ever be '/')...
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});