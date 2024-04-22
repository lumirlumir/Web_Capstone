const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv'); dotenv.config();
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //이거 때문에 아까 안됐음...
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        exclude: ['/node_modules/'],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ]
}
