var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
 
gulp.task('build', function () {
  browserify({
    entries: './src/js/calc.jsx',
    transform: [babelify.configure({presets: ["es2015", "react"]})],
    debug: true
  })
  .bundle()
  .pipe(source('calc.js'))
  .pipe(gulp.dest('./public/js/'));
});
 
gulp.task('default', ['build']);
