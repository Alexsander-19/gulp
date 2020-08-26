module.exports = function () {
  $.gulp.task('build', $.gulp.series('clean', 'copy', 'scss', 'scripts', 'images', 'svg', 'webp', 'html'));
};

