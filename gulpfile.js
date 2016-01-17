// Include gulp
var gulp = require('gulp');

var connect = require('gulp-connect');



gulp.task('connectDist', function () {
    connect.server({
        //root: 'dist',
        port: 8001,
        livereload: true
    });
});

// Default Task
gulp.task('default', ['connectDist']);