const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production'; // boolean
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: ['css-loader', 'sass-loader'],
        publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssProd;


module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js' //entryのファイル名が入る
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only", //コメントが冗長なので、エラーだけをlogに出力
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'yeah template',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            excludeChunks: ['contact'],
            template: './src/index.pug'
        }),
        new HtmlWebpackPlugin({
            title: 'yeah ×2 template',
            hash: true,
            filename: 'contact.html',
            chunks: ['contact'],
            template: './src/contact.pug'
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};