const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my_app.js',
    path: path.resolve(__dirname, './dist')
  }
}

