// This will run on our server-side, to convert it all into node-readable code (it uses babel)
const path = require("path");
module.exports = {
    // Inform webpack we're building this bundle for Node.js
    target: 'node',
    // Root file of server application
    entry: './src/index.js',
    // Output bundle to 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // Tell webpack to run Babel on every file.
    module: {
        rules: [
            {
                test: /\.js?$/,// Only apply Babel to javascript files...
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', // Turn JSX into normal javascript
                        'stage-0',
                        [ 'env', { targets : { browsers: [ 'last 2 versions']}}] // Catch all transform rules to meet requirements for latest two browsers...
                    ]
                }
            },
        ]
    }
}