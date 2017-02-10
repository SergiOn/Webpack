'use strict';

const webpack = require('webpack');

module.exports = {
    context:  __dirname + '/frontend',
    entry: "./app",

    output: {
        path: __dirname + '/public',
        filename: "app.js"
    },

    module: {

        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    }
};