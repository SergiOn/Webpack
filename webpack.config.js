'use strict';

var path = require('path');

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
            loader: "style!css!autoprefixer?browsers=last 2 version!stylus?resolve url"
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: "url?name=[path][name].[ext]&limit=4096"
        }]
    }
};