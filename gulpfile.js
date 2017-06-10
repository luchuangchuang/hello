'use strict';

 var gulp = require('gulp');


var htmlmin = require('gulp-htmlmin');

var less = require('gulp-less');

 var cssmin = require('gulp-cssmin');

 var rename = require('gulp-rename');

gulp.task("hello",function(){
	console.log("hello gulp");
});

gulp.task("itany",function(){
	console.log("网博");
});
gulp.task("copy",function(){

	gulp.src("src/**/*.html")
		.pipe(gulp.dest("dist/"));
});

gulp.task("min-html",function(){
	gulp.src("src/*.html")
		
		.pipe(htmlmin({
			collapseWhitespace:true,
			collapseBooleanAttributes:true,
			removeEmptyAttributes:true,
			removeScriptTypeAttributes:true
		}))
		.pipe(gulp.dest("dist/"));
});

gulp.task('less',function(){
	gulp.src('src/**/*.less')
	    .pipe(less())
	    .pipe(gulp.dest('dist/css'))
	    .pipe(cssmin())
	    .pipe(rename({suffix:'.min'}))
	    .pipe(gulp.dest('dist/css'))

});