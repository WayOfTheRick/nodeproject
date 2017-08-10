var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsfiles = ['*.js','src/**/*.js'];

//The pipe() function reads data from a readable stream 
//as it becomes available and writes it to a destination writable stream.
gulp.task('style', function(){
    return gulp.src(jsfiles)
        .pipe(jshint());
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var options = { 
        bowerjson: require('./bower.json'),
        directory: './bower_componenets'
    }
    
    //define the gulp pipeline
    //tell gulp where our html files are
    return gulp.src('./src/views/*.html');
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'());
});