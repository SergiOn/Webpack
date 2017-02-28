'use strict';

const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const AssetsPlugin = require('assets-webpack-plugin');
const rimraf = require('rimraf');

module.exports = {
    context: path.resolve(__dirname, 'frontend'),
    entry:   {
        home:   './home',
        about:  './about',
        common: './common'
    },
    output:  {
        path:           path.resolve(__dirname, 'public', 'assets'),
        publicPath:    '/assets/',
        filename:      '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
        library:       '[name]'
    },

    resolve: {
        extensions: ['', '.js', '.styl']
    },

    module: {

        loaders: [{
            test:   /\.js$/,
            loader: "babel?presets[]=es2015"
        }, {
            test:   /\.jade$/,
            loader: "jade"
        }, {
            test:   /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[hash:6].[ext]'
        }]

    },

    plugins: [
        {
            apply: (compiler) => {
                rimraf.sync(compiler.options.output.path);
            }
        },
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        // new AssetsPlugin({
        //     filename: 'assets.json',
        //     path:     __dirname + '/public/assets'
        // })
    ]
};