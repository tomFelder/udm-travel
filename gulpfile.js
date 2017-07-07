var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Hooray - you created a GULP task')
});

gulp.task('html', function() {
  console.log('imagine something useful here')
});

gulp.task('styles', function() {
  console.log('imagine styles being played with here')
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
