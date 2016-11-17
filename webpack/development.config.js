let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './app/admin/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['latest', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css?importLoaders=1',
          'postcss',
          'sass'
        ])
      }
    ]
  },
  output: {
    path: 'public',
    filename: 'app.min.js'
  }
}
