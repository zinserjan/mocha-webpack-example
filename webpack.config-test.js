var path = require('path');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');


module.exports = {
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  output: {
    devtoolModuleFilenameTemplate        : '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
        { raw: true, entryOnly: false })
  ],
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: "#source-map"
};
