module.exports = function () {
  $.gulp.task('svg', function () {
    return $.gulp.src('./src/assets/images/**/*.svg',{
      base: 'src'
    })
        .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.gp.cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: {xmlMode: true}
        }))
        .pipe($.gp.replace('&gt;', '>'))
        .pipe($.gulp.dest('./build/'));
  });
};