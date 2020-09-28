module.exports = function() {
  $.gulp.task("webp", function() {
    return $.gulp.src("./src/assets/images/**/*.{png,jpg}",{
      base: 'src'
    })
      .pipe($.gp.webp({quality: 80}))
      .pipe($.gulp.dest("./build/"));
  });
}