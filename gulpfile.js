var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
	sass : "assets/scss/",
	css : "assets/css/",
	js : "assets/js/"
};

gulp.task('compile-sass', function(){
	return gulp.src(paths.sass + "*.scss")
	.pipe(sass({
		sourcemap: false,
		style: "compressed",
		noCache: true
	}))
	.pipe(gulp.dest(paths.css))
});

gulp.task('watch', function(){
	gulp.watch(paths.sass + "*.scss", ['compile-sass'])
});
