module.exports = function () {
  $.gulp.task('scss', function () {
    return $.gulp.src('./src/pages/**/**/**/*style.scss',{
      base: 'src'
    })
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass())
        .pipe($.gp.postcss([
          $.autoprefixer(),
          $.cssnano()
        ]))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('./build/'))
        .pipe($.browserSync.stream());
  });
};