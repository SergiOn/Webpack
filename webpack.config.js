'use strict';

let path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'frontend'),

  entry: {
    main: './main'
  },

  output: {
    path:       path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename:   '[name].js'
  },

  module: {

    loaders: [{
      test:    /\.js$/,
      include: path.resolve(__dirname, 'frontend'),
      loader:  "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.styl$/,
      loader: 'style!css!stylus?resolve url'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }]

  },

  devServer: {
    contentBase: path.resolve(__dirname, 'backend'),
    hot: true
  }
};

