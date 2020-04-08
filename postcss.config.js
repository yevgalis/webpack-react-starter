const isDevMode = process.env.NODE_ENV === 'development';

if (!isDevMode) {
  module.exports = {
    plugins: {
      'autoprefixer': {},
      'cssnano': {}
    }
  };
}
