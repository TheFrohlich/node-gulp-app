var gulp = require('gulp');
var path = require('path');
var configs = require('./tasks/gulp-config.js');
var tsTransplier = require('gulp-typescript');

var webpack = require('gulp-webpack');


var lessTranspiler = require('gulp-less');
//add vendors prefix
var autoPrefix = require('gulp-autoprefixer');
var cssConcat = require('gulp-concat-css');

// var prompt = require('gulp-prompt');
// var replace = require('gulp-replace');
// var rename = require('gulp-rename');



gulp.task('transpile', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(tsTransplier())
        .pipe(gulp.dest('./src'))
});

gulp.task('less', function (target) {
    return gulp.src('./src/**/*.less')
        .pipe(lessTranspiler())
        .pipe(autoPrefix({ browsers: ['last 2 versions'] }))
        .pipe(cssConcat('styles.css'))
        .pipe(gulp.dest(target));
});

gulp.task('build', ['transpile', 'less'], function () {

});

