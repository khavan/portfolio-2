const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, 'public/')
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
}