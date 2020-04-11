const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  module.exports = {
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': { stage: 3 },
      'autoprefixer': {},
      'cssnano': {}
    }
  };
}
