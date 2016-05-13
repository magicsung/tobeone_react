var path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
    // production remove html output
    html: "./index.html"
  },
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [
          __dirname + "/src"
        ],
        loader: 'babel',
        query: { presets:['react'] }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  }
}
