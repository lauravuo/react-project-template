const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const buildFolderPath = path.resolve(__dirname, '../build');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: buildFolderPath,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TODO',
      template: './webpack/template.html'
    })
  ]
};
