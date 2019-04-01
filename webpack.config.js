const { join } = require('path');

module.exports = {
  entry: './src/client/Main.js',
  output: {
    path: join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-react']
        }
      }
    ],
  },
};
