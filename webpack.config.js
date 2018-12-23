const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
// BUILD_DIR represents the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, './dist');
// APP_DIR holds the directory path of the React application's codebase
var APP_DIR = path.resolve(__dirname, './src');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    disableHostCheck: true,
    hot: true,
    host: '0.0.0.0',
    port: 5000,
    //open: true,
    //publicPath: '/static/',
    //watchContentBase: true
  },
  entry: {
    javascript: APP_DIR + '/index.js',
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // For every file with a .js extension
        // Webpack pipes the code through babel-loader
        // for transforming ES6 down to ES5.
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1, 
              localIdentName: "[name]_[local]_[hash:base64]",
              camelCase: true
            }
          }
        ]
      }
    ],
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: './src/template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

