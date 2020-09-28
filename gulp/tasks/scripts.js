const jsfiles = $.path.js;

module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src('./src/pages/**/*.js',{
      base: 'src'
    })
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
        .pipe($.gp.uglify())
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('./build/'))
        .pipe($.browserSync.stream());
  });
};
