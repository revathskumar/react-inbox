var path = require('path');

module.exports = {
  entry: {
    app: ["./app/index.js"]
  },
  output: {
    path: path.resolve( __dirname, "dist"),
    publicPath: '/assets/',
    filename: 'inbox.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
