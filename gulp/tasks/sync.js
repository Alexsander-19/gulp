module.exports = function () {
  $.gulp.task('sync', function () {
    $.browserSync.init({
      server: 'build/'
    });

    $.gulp.watch('src/scss/**/*.scss', $.gulp.series('scss'));
    $.gulp.watch('src/*.html', $.gulp.series('html'));
    $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'));
  });
};