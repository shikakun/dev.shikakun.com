'use strict';

var gulp = require('gulp');
var pleeease = require('gulp-pleeease');
var sass = require('gulp-sass');
var themeDir = 'themes/dev.shikakun.com/'

gulp.task('sass', function() {
  gulp.src(themeDir + 'assets/stylesheets/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(pleeease({
      autoprefixer: {
        browsers: [
          'last 1 version',
          'iOS >= 7',
          'Android >= 4',
          'ie >= 9'
        ]
      },
      minifier: true
    }))
    .pipe(gulp.dest(themeDir + 'source/stylesheets/'));
});

gulp.task('copy', function() {
  gulp.src(themeDir + 'assets/**/*.{eot,js,otf,svg,woff}')
    .pipe(gulp.dest(themeDir + 'source/'));
});

gulp.task('default', function() {
  gulp.watch(themeDir + 'assets/stylesheets/**/*.scss', ['sass']);
  gulp.watch(themeDir + 'assets/**/*.{eot,js,otf,svg,woff}', ['copy']);
});
