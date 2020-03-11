const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevMode ? 'none' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:4].js',
    path: path.join(__dirname, 'build')
  },
  devtool: isDevMode ? 'source-map' : 'none',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
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
      },
      {
        test: /.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
