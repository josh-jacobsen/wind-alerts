var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var fs = require('fs')

var PATHS = {
  build: path.join(__dirname, 'server', 'static'),
  html: path.join(__dirname, 'client', 'html'),
  css: path.join(__dirname, 'client', 'css')

}

module.exports = {
  entry: './client/index.js',
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: ''
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
  plugins: [
  // Simply copies the files over
  new CopyWebpackPlugin([
    { from: PATHS.html }, // to: output.path
    { from: PATHS.css } // to: output.path
  ]),
  // Avoid publishing files when compilation fails
  new webpack.NoErrorsPlugin()
],
  node: {
  fs: "empty"
  },
  devServer: {
    inline: true,
    port: 8008
  },
//   plugins: [
//   // Simply copies the files over
//   new CopyWebpackPlugin([
//     { from: PATHS.html }, // to: output.path
//   ]),
//   // Avoid publishing files when compilation fails
//   new webpack.NoErrorsPlugin()
// ],
// Create Sourcemaps for the bundle
  devtool: 'source-map'
}
