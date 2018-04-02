var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  gulp.src('./src/**/Styles.less')
      .pipe (less())
      .pipe (gulp.dest('./dist/'));
});

gulp.task('less:watch', function() {
	gulp.watch('./src/**/*.less', ['less']);
});