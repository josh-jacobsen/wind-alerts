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
    /* the publicPath is used by WDS and has to be in string format (instead of PATHS.build), otherwise WDS won't find it */
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
