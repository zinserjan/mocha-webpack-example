var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackInfoPlugin = require('webpack-info-plugin');

var info = new WebpackInfoPlugin({
  stats: {
    version: false,
    colors: true,
    hash: false,
    timings: true,
    assets: false,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  state: true
});



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
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
    info
  ],
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: "#source-map"
};
