const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevMode ? 'none' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.[hash:8].js',
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
          {
            loader: 'css-loader',
            options: {importLoaders: 2}
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name]-[hash:8].[ext]'
            }
          }
        ]
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   test: /.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         outputPath: 'fonts/'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      filename: 'index.html',
      template: path.join(__dirname, './public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: isDevMode ? 'css/style.css' : 'css/style.[hash:8].css',
      chunkFilename: isDevMode ? 'css/[id].css' : 'css/[id].[hash:8].css'
    }),
    new CopyPlugin([
      {
        from: 'public/robots.txt',
        to: path.join(__dirname, 'build')
      },
      // {
      //   from: './public/libs/**/*.js',
      //   to: path.join(__dirname, 'build/js/libs/[name].[ext]'),
      //   toType: 'template'
      // }
    ]),
    // new HtmlWebpackTagsPlugin({
    //   scripts: [{
    //     path: 'js/libs',
    //     glob: '*.js',
    //     globPath: 'public/libs'
    //   }],
    //   append: false,
    // })
  ]
};
