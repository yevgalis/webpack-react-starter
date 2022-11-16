const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  bail: isProduction,
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].[contenthash:8].js',
  },
  devServer: {
    'static': {
      directory: path.join(__dirname, 'build'),
    },
    open: true,
    hot: true,
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
    runtimeChunk: true,
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
        test: /.(jpg|jpeg|png)$/,
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
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './public/index.html'),
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
    new CopyPlugin({
      patterns: [{
        from: 'public',
        to: path.join(__dirname, 'build'),
        globOptions: {
          ignore: ['**/index.html'],
        },
      }],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new EslintWebpackPlugin({
      files: '{**/*,*}.{js,jsx,ts,tsx}',
      emitWarning: false,
    }),
    new StylelintWebpackPlugin({
      files: '{**/*,*}.{css,scss}',
      emitWarning: false,
    }),
    new CaseSensitivePathsPlugin(),
  ].filter(Boolean),
};
