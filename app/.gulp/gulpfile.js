/*
Meteor doesn't play nicely with autoprefixer, so we'll build
our own Stylus pipeline and not use meteor-stylus
*/

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    stylus = require('gulp-stylus'),
    elf = require('elf-grid'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber');

var onError = function (err) {
  gutil.beep();
  console.log(err);
};

gulp.task('stylus', function() {
  return gulp.src('../css/style.styl')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(stylus({
      use: [elf()]
    }))
    .pipe(gulp.dest('../css/'));
});

gulp.task('autoprefixer', ['stylus'], function () {
  return gulp.src('../css/style.css')
    .pipe(prefix())
    .pipe(gulp.dest('../css/'));
});

gulp.watch('../css/**/*.styl', ['autoprefixer']);

gulp.task('default', ['autoprefixer']);
