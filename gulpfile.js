const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src('styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles/'))
})

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: "127.0.0.1:8080"
  });
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('styles/**/*.scss', ['sass']);
  gulp.watch('index.html').on('change', browserSync.reload);
})

gulp.task('default', ['watch', 'sass', 'browser-sync']);