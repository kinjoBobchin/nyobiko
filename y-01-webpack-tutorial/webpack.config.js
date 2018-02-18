const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module:{
        rules: [
            {test: /\.css$, use: 'css-loader'}
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'yeah template',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.ejs'
        })
    ]
};