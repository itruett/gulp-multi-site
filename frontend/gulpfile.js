// I'm gonna need gulp here.
var gulp = require('gulp');

// Using this to log to console and read CLI araguments.
var gutil = require('gulp-util');

// Resolves paths on the filesystem.
var path = require('path')

// Load project configuration.
var config = require('./config.json');

gulp.task('default', function() {
	// place code for your default task here
});

gulp.task('build', function() {
	var variant = gutil.env.variant;
	var target = path.resolve(config[variant].target);

	gutil.log('Building variant: ' + variant);
	gutil.log('Target directory: ' + target);
});

