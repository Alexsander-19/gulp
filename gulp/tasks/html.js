module.exports = function () {
  $.gulp.task("html", function () {
    return $.gulp.src("./src/pages/**/*.html",{
      base: 'src'
    })
      .pipe($.gp.posthtml([
        $.posthtmlInclude()
      ]))
      .pipe($.gp.htmlmin({ collapseWhitespace: true }))
      .pipe($.gulp.dest("./build"))
      .on('end', $.browserSync.reload);
  });
};