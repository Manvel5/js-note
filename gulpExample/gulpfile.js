"use strict";

const gulp = require("gulp");

gulp.task('default', function(callback) {
	console.log('default');
	callback();
});

gulp.task('js', function() {
	return gulp.src('src/**/*.*'). // its returned vinyl File objects.
		on('data', function(file){
			console.log('content', file.contents);
			console.log('path', file.path);
			console.log('cwd', file.cwd);
			console.log('base', file.base);// src/
			console.log('relative', file.relative); //**/*.*
			console.log('dirname', file.dirname);
			console.log('basename', file.basename);
			console.log('stem', file.stem);
			console.log('extname', file.extname);
			
		}).
		pipe(gulp.dest('dest')); // its returned vinyl File objects.
});
// each pipe returned vinyl File objects and we can write new .pipe()

// gulp.src('src/**/*.{js,css}')
// gulp.src('{path1,path2}/**/*.{js,css}')
// gulp.src(['src/**/*.*','!node_modules/**'])

// pipe(gulp.dest(function(file){
// 	var path;
// 	if(file.ext == 'js') {
// 		path = 'jspath';
// 	}
// 	if(file.ext == 'css') {
// 		path = 'csspath';
// 	}
// 	return path;
// })); 

//
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourceMap = require('source-maps');

gulp.task('task1', function(){
	return gulp.src('src/js/**/*.js', {base: 'src'}).
	pipe(sourceMap.init()).
	pipe(debug()).
	pipe(concat('main.js')).
	pipe(gulp.dest('dest'));
});
