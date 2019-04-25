import express from "express";
    // We ignore express and other external modules w/ webpack-node-externals module, saving us development time...
import renderer from './helpers/renderer';

const app = express();
const port = 8081;

app.use(express.static('public'));

app.get("/", (req,res) => {
    const html = renderer();
    res.send(html);
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});