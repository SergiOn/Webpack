'use strict';

module.exports = {
    entry: "./home.js",
    output: {
        filename: "build.js",
        library: "home"
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map"
};