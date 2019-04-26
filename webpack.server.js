// This will run on our server-side, to convert it all into node-readable code (it uses babel)
const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.js");

const config = {
    // Inform webpack we're building this bundle for Node.js
    target: "node",
    // Root file of server application
    entry: "./src/index.js",
    // Output bundle to 
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    // Ignore anything in the node_modules in our server side bundle.js file...
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);