var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');

// Compila Sass
gulp.task('sass', function(){
  return sass('assets/scss/')
    .on('error', sass.logError)
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Gulp Watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('assets/js/**/*.js', browserSync.reload);
});

// Browser Sync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
})