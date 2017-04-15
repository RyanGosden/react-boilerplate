/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/ node_modules/],
        loader: 'babel-loader',
        // query: {
        //   presets: ['es2015', 'react']
        // }
  },
        { //CSS loader
             test: /\.css$/,
             use: ExtractTextPlugin.extract({use: ["css-loader"]})
         },
         { //JPG loader
             test: /\.jpg$/, use: "url-loader?limit=13000"
         },
         { //PNG loader
             test: /\.png$/, use: "url-loader?limit=13000"
         },
         { //GIF loader
             test: /\.gif$/, use: "url-loader?limit=13000"
         },
         { //Font loader
             test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: "file-loader"
         }]
       },

         plugins: [
           new ExtractTextPlugin('/css/main.css')
         ]

};
