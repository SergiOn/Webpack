'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context:  path.resolve(__dirname, "frontend"),
    entry: "./main",

    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    },

    module: {

        loaders: [{
            test: /\.js$/,
            loader: "babel"
        }, {
            test: /\.jade$/,
            loader: "jade"
        }, {
            test: /\.css$/,
            loader: "style!css!autoprefixer?browsers=last 2 version"
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract("css!stylus?resolve url&linenos")
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: "url?name=[path][name].[ext]&limit=4096"
        }]
    },

    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ]
};