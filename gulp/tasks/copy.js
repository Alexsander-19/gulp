module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      './src/assets/fonts/**'
    ], {
      base: 'src'
    })
      .pipe($.gulp.dest('./build'));
  });
};
