// I'm gonna need gulp here.
var gulp = require('gulp');

// Using this to log to console.
var gutil = require('gulp-util');

// Used to parse CLI arguments.
var minimist = require('minimist');

// Resolves paths on the filesystem.
var path = require('path')

// Load project configuration.
var config = require('./config.json');

// Names of arguments expected by the build.
var validArgs = {
	string : 'variant'
}

// Cut out just the arguments we care about (1st is "node" and 2nd is the gulpfile).
var options = minimist(process.argv.slice(2), validArgs);

gulp.task('default', function() {
	// place code for your default task here
});

gulp.task('build', function() {
	var variant = options['variant'];
	var target = path.resolve(config[variant].target);

	gutil.log('Building variant: ' + variant);
	gutil.log('Target directory: ' + target);
});
