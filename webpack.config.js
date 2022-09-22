const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my_app.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })]
}


