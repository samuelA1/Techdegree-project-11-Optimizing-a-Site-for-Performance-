'use-strict';

let gulp = require('gulp'),
    uglify = require('gulp-minify'),
    uglifyJS = require('uglify-js2'),
    cleanCSS = require('gulp-clean-css'),
    useref = require('gulp-useref'),
    imgResize = require('gulp-jimp-resize'),
    rename = require('gulp-rename'),
    wait = require('gulp-wait'),
    del = require('del');


    gulp.task('concate', function() {
      return gulp.src('src/*.html', {base: 'src'})
          .pipe(useref())
          .pipe(gulp.dest('.tmp'));
    });

    gulp.task('resizeIMG', function() {
      gulp.src('src/img/photos/*')
          .pipe(imgResize({
            sizes: [
              {'suffix': 'sm', 'width': 300},
              {'suffix': 'lg', 'width': 800}
            ]
          }))
          .pipe(gulp.dest('.tmp/img/photos'));
    });

    gulp.task('clean', function() {
      del(['.tmp/css/*.css', '.tmp/js/*.js', '.tmp/index.html']);
    });

    gulp.task('cleanBuild', function() {
      del('dist/*');
    });

    gulp.task('default', function() {
      gulp.watch('src/css/*.css', ['clean', 'concate']);
      gulp.watch('src/js/*.js', ['clean', 'concate']);
    });

    gulp.task('minifyJS', function() {
      gulp.src('.tmp/js/app.js', {base: '.tmp'})
          .pipe(wait(1000))
          .pipe(uglify())
          .pipe(gulp.dest('dist'));
    });

    gulp.task('minify', ['minifyJS'], function() {
      gulp.src('.tmp/css/styles.css', {base: '.tmp'})
          .pipe(wait(1000))
          .pipe(cleanCSS({compatibility: '*'}))
          .pipe(gulp.dest('dist'))

    });

    gulp.task('build', ['cleanBuild', 'minify'], function() {
      gulp.src(['.tmp/img/**/*', '.tmp/index.html'], {base: '.tmp'})
          .pipe(wait(1000))
          .pipe(gulp.dest('dist'));
    });
