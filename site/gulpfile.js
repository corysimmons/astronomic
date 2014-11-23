var gulp = require('gulp'),
    gutil = require('gulp-util'),
    stylus = require('gulp-stylus'),
    elf = require('elf-grid'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

var onError = function (err) {
  gutil.beep();
  console.log(err);
};

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./web"
    }
  });
});

gulp.task('stylus', function() {
  return gulp.src('web/css/style.styl')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(stylus({
      use: [elf()]
    }))
    .pipe(gulp.dest('web/css/'))
    .pipe(reload({ stream: true }));
});

gulp.task('autoprefixer', ['stylus'], function () {
  return gulp.src('web/css/style.css')
    .pipe(prefix())
    .pipe(gulp.dest('web/css/'));
});

gulp.watch('web/css/**/*.styl', ['autoprefixer']);

gulp.task('default', ['autoprefixer', 'browser-sync']);
