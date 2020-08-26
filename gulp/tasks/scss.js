module.exports = function () {
  $.gulp.task('scss', function () {
    return $.gulp.src('src/scss/style.scss')
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass())
        .pipe($.gp.postcss([
          $.autoprefixer(),
          $.cssnano()
        ]))
        .pipe($.gp.rename('style.min.css'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};