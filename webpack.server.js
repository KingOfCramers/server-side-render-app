// This will run on our server-side, to convert it all into node-readable code (it uses babel)
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
    // Inform webpack we're building this bundle for Node.js
    target: 'node',
    // Root file of server application
    entry: './src/server.js',
    // Output bundle to 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);