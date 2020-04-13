const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isDevelopment ? 'none' : 'production',
  bail: isProduction,
  devtool: isDevelopment ? 'cheap-module-source-map' : 'none',
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.[hash:8].js',
    path: path.join(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    open: true,
    port: 1337,
    historyApiFallback: true
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          keep_classnames: isProduction,
          keep_fnames: isProduction,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          },
          extractComments: false
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        // exclude: /(node_modules|bower_components)/,
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
            options: { importLoaders: 2 }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(bmp|jpg|jpeg|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts',
            }
          }
        ]
      }
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
      filename: isDevelopment ? 'css/style.css' : 'css/style.[hash:8].css',
      chunkFilename: isDevelopment ? 'css/[id].css' : 'css/[id].[hash:8].css'
    }),
    new CopyPlugin([
      {
        from: 'public/robots.txt',
        to: path.join(__dirname, 'build')
      }
    ]),
    new CaseSensitivePathsPlugin(),
    new Dotenv()
    // new MergeIntoSingleFilePlugin({
    //   files: [{
    //     src: [
    //       './public/libs/jquery-3.4.1.min.js',
    //       './public/libs/bootstrap.bundle.min.js'
    //     ],
    //     dest: 'js/vendors.js'
    //   }]
    // }),
    // new HtmlWebpackTagsPlugin({
    //   scripts: 'js/vendors.js',
    //   append: false,
    // })
  ]
};
