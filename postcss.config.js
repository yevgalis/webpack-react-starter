if (process.env.NODE_ENV === 'production') {
  module.exports = {
    parser: 'postcss-safe-parser',
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': { stage: 3 },
      'cssnano': {}
    }
  };
}
