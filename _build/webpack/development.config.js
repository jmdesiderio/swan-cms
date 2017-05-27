// @flow
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

console.log('webpack nodeenv', process.env.NODE_ENV)

module.exports = {
  entry: './app/client/index.js',
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'app.min.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
      __PROD__: process.env.NODE_ENV === 'production'
    }),
    new ExtractTextPlugin('style.min.css')
  ]
}
