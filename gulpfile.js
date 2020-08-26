global.$ = {
  gulp: require('gulp'),
  gp:   require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  autoprefixer: require('autoprefixer'),
  posthtmlInclude: require('posthtml-include'),
  cssnano: require('cssnano'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config.js'),
    js: './src/js/**/*.js',
  }
};

$.path.config.forEach(function(path) {
  require(path)();
});
