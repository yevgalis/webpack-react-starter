module.exports = {
  parser: 'postcss-safe-parser',
  plugins: {
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': { stage: 3 },
    'cssnano': {}
  }
};
