var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require("cssnano"); // CSS Minifier
var uncss = require('postcss-uncss');
var rename = require("gulp-rename");
var sass = require('gulp-sass');


gulp.task('css', function() {
    var plugins = [];
    return gulp.src('./csstest/config.css')
        .pipe(postcss([
            uncss({
                html: ['_includes/**/*.html'],
                htmlroot: '_includes',
                ignore: ['.monthholder', '.col-6', '.col-sm-4', '.col-lg-3', '.ex-month', '.month', '.unavailable']
            })
        ]))
        .pipe(gulp.dest('./csstest/test'));
});




 gulp.task('default', function() {
      var plugins = [];
    return gulp.src('./_sass/config.scss')
        .pipe(sass())
        .pipe(gulp.dest('./csstest/test/test/'));
});