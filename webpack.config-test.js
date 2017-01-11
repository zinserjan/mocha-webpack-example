var path = require('path');
var webpack = require('webpack');
var isWebpack2 = /^2/.test(require('webpack/package.json').version);
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var nodeExternals = require('webpack-node-externals');

const awesomeTsLoader = false;

const coverage = process.env.NODE_ENV === 'coverage';

var config = {
  resolve: {
    modules: [path.resolve('./src'), "node_modules"],
    extensions: ['.ts', '.js'],
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    loaders: [].concat(
      coverage ? {
          test: /\.(js|ts)/,
          exclude: /(node_modules|bower_components)/,
          include: path.resolve('src'),  // instrument only testing sources with Istanbul, after ts-loader runs
          loader: 'istanbul-instrumenter-loader'
        }: [],
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      // {
      //   test: /.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          awesomeTsLoader ? 'awesome-typescript-loader' : 'ts-loader'
        ]
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
    ),
  },
  plugins: [].concat(awesomeTsLoader ? new CheckerPlugin() : []),
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: "#inline-cheap-module-source-map"
};

if (!isWebpack2) {
  config.resolve.root = [
    path.resolve('./src')
  ];
  config.resolve.extensions.unshift('');
  config.resolveLoader = {
    // npm link mocha-webpack hack
    root: [
      path.join(__dirname, "node_modules")
    ]
  };
}

module.exports = config;
