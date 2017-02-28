'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'frontend'),

  entry: {  // --inline --hot
    main: ['webpack-dev-server/client', 'webpack/hot/dev-server', './main']
  },

  output: {
    path:        path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename:   '[name].js'
  },

  module: {

    loaders: [{
      test:    /\.js$/,
      include:  path.resolve(__dirname, 'frontend'),
      loader:  "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.styl$/,
      // loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
      loader: 'style!css!stylus?resolve url'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }]

  },

  plugins: [
    // new ExtractTextPlugin('[name].css', {allChunks: true, disable: process.env.NODE_ENV=='development'}),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase:  path.resolve(__dirname, 'backend'),
    hot: true
  }
};



