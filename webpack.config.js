'use strict';

let path = require('path');

// Webpack Dev Server
module.exports = {
  context: __dirname + '/frontend',

  entry:   {
    main: './main'
  },

  output:  {
    path:       path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename:   '[name].js'
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      include: path.resolve(__dirname, 'frontend'),
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.styl$/,
      loader: 'style!css!stylus?resolve url'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[name].[ext]?[hash]'
    }]

  },

  devServer: {
    host: 'localhost', // default
    port: 8080, // default
    proxy: [{
      path: /.*/,
      target: 'http://localhost:3000'
    }]
  }
};



