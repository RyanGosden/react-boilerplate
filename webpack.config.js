/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');

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
        use: {
          loader: 'babel',
          options: {
            babelrc: false,
            presets: [
              ['es2015', {modules: false}],
              'react',
            ],
          }
        }
      }
    ]
  }
};
