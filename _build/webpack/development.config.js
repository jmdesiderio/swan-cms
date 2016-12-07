// @flow
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

console.log('webpack nodeenv', process.env.NODE_ENV)

module.exports = {
  devtool: 'source-map',
  entry: './app/client/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['latest', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
          'sass'
        ])
      }
    ]
  },
  output: {
    path: 'public',
    filename: 'app.min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
      __PROD__: process.env.NODE_ENV === 'production'
    }),
    new ExtractTextPlugin('style.min.css')
  ],
  postcss: [
    require('autoprefixer')({ browsers: ['last 2 versions'] })
  ]
}
