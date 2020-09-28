module.exports = function () {
  $.gulp.task('build', $.gulp.series('clean', 'copy', 'sprite', 'scss', 'scripts', 'images', 'svg', 'webp', 'html'));
};

