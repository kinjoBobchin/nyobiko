const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'yeah template',
        minify: {
            collapseWhitespace: true
        },
        template: './src/index.ejs'
        })
    ]
};