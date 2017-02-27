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
            loader: "style!css"
            // !autoprefixer?browsers=last 2 version!
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: "file?name=[path][name].[ext]"
        }]
    }
};