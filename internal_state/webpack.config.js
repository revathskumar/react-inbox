var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ["./app/index.js"],
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'material-design-lite']
  },
  output: {
    path: path.resolve( __dirname, "dist"),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  devServer: {
    stats: {
      timings: true,
      chunkModules: false,
      chunks: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ]
}