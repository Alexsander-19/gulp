module.exports = function () {
  $.gulp.task('sprite', function () {
    return $.gulp.src('./src/assets/icons/**/*.svg',{
      base: 'src'
    })
        .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        // build svg sprite
        .pipe($.gp.svgSprite({
          mode: {
            symbol: {
              dest: './assets/icons/'
            }
          }
        }))
        .pipe($.gulp.dest('./build/'));
  });
};