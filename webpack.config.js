const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

module.exports = {
  entry: "./public/src/index.js",
  output: {
    filename: "./public/dist/bundle.js"
  },
  watch: NODE_ENV == "development",
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};
