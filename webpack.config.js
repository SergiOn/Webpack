'use strict';

module.exports = {
    context:  __dirname + '/frontend',
    entry: "./home",

    output: {
        path: __dirname + '/public',
        filename: "home.js"
    }
};