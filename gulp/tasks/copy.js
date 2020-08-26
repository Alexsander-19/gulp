module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      './src/font/**'
    ], {
      base: 'src'
    })
      .pipe($.gulp.dest('./build'));
  });
};
