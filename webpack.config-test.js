var path = require('path');
var webpack = require('webpack');
var isWebpack2 = /^2/.test(require('webpack/package.json').version);

var nodeExternals = require('webpack-node-externals');


var config = {
  resolve: {
    modules: [path.resolve('./src'), "node_modules"],

  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      {
        test: /.json$/,
        loader: 'json-loader',
      },
      // normally you should replace all css loaders with null loader
      {
        test: /\.scss$/,
        loaders: ['fake-style-loader', 'css-loader?importLoaders=1', 'sass-loader']
      },
      {
        test: /\.less$/,
        loaders: ['fake-style-loader', 'css-loader?importLoaders=1', 'less-loader']
      },
      {
        test: /\.css$/,
        loaders: ['fake-style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
      }
    ],
  },
  plugins: [],
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: "#inline-cheap-module-source-map"
};

if (!isWebpack2) {
  config.resolve.root = [
    path.resolve('./src')
  ];
  config.resolveLoader = {
    root: [
      path.join(__dirname, "node_modules")
    ]
  };
}

module.exports = config;
