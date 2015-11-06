var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('jshint', function() {
    gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
     console.log('Hello world.');
});

gulp.task('test', function() {
    console.log("Awesome test.");
});

gulp.task('scripts', function() {
    gulp.src(['./src/*.js'])
        .pipe(concat('s3-nuget.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./lib/'));
});
