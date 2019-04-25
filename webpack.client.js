// This is intended to compile the client React app and place it into the public folder...
const path = require("path");
module.exports = {
    // Use the client.js file...
    entry: './src/client/client.js',
    // Output bundle to public folder...
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    // Tell webpack to run Babel on all our .js files.
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