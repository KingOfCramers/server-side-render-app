// This is intended to compile the client React app and place it into the public folder...
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const config = {
    // Use the client.js file...
    entry: './src/client/client.js',
    // Output bundle to public folder...
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);