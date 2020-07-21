'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp
    .src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

// временная штука, потом добавлю browser sync, пока ручная транспиляция ч-з rebuild
// gulp.task('rebuild', function(){
//   gulp.watch('app/scss/*.scss', ['sass']); 
// })
