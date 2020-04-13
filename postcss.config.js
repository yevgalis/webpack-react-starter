const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  module.exports = {
    parser: 'postcss-safe-parser',
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': { stage: 3 },
      'autoprefixer': {},
      'cssnano': {}
    }
  };
}
