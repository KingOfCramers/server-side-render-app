module.exports = {
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
};