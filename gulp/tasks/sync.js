module.exports = function () {
  $.gulp.task('sync', function () {
    $.browserSync.init({
      server: 'build/pages/main'
    });

    $.gulp.watch('./src/pages/**/*.scss', $.gulp.series('scss'));
    $.gulp.watch('./src/pages/**/*.html', $.gulp.series('html'));
    $.gulp.watch('./src/pages/**/*.js', $.gulp.series('scripts'));
  });
};