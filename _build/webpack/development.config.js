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
            cacheDirectory: true,
            presets: [ 'latest', 'react', 'stage-0' ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({ browsers: ['last 2 versions'] })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }]
        })
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
