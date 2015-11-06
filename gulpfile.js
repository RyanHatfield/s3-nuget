var gulp = require('gulp');
var gutil = require('gulp-util');
var S3NuGet = require('./lib/s3-nuget.js');

gulp.task('test-hello', function() {
    console.log('Awesome tests should go here.');
});

gulp.task('test-fail', function() {
    var err = new gutil.PluginError('S3NuGet', 'error message', {showStack: false});
    throw err;
});

// Some top level tasks
gulp.task('default', function() {
     console.log('Hello world.');
});

gulp.task('test', [ 'test-hello', 'test-fail' ]);

