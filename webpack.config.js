var path = require('path')
var webpack = require('webpack')

var PATHS = {
  build: path.join(__dirname, 'client', 'static')
}

module.exports = {
  entry: './main.js',
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/client/static/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
}
