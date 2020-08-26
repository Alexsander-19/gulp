module.exports = function() {
  $.gulp.task("webp", function() {
    return $.gulp.src("./src/img/**/*.{png,jpg}")
      .pipe($.gp.webp({quality: 80}))
      .pipe($.gulp.dest("./build/img"));
  });
}