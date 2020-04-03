const isDevMode = process.env.NODE_ENV === 'development';

if (!isDevMode) {
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')  // NOTE - check if needed
    ]
  };
}
