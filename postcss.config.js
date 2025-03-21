module.exports = {
  parser: 'postcss-safe-parser',
  plugins: {
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    cssnano: {},
  },
};
