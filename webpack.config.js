const path = require('path');
const isDevBuild = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevBuild ? 'none' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devtool: isDevBuild ? 'source-map' : 'none',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  }
};
