const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const robotsTxtConfig = {
  policy: [
    {
      userAgent: '*',
      disallow: '/',
    },
  ],
};

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  bail: isProduction,
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  entry: './src/index.tsx',
  output: {
    clean: true,
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].[contenthash].js',
    // publicPath: '/',
  },
  devServer: {
    'static': {
      directory: path.join(__dirname, 'build'),
    },
    open: false,
    port: 1337,
    historyApiFallback: true,
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: isProduction ? false : 'single',
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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },

      {
        test: /.(css|scss)$/,
        include: /\.module\.(css|scss)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: isProduction ? '[hash:base64]' : '[path]-[name]__[local]',
              },
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
      {
        test: /.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
      {
        test: /.(jpg|jpeg|png|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: false,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new RobotstxtPlugin(robotsTxtConfig),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    new EslintWebpackPlugin({
      files: '{**/*,*}.{js,jsx,ts,tsx}',
      emitWarning: false,
    }),
    new StylelintWebpackPlugin({
      files: '{**/*,*}.{css,scss}',
      emitWarning: false,
    }),
  ].filter(Boolean),
};
