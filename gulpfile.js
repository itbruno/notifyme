var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var paths = {
	sass : "assets/scss/",
	css : "assets/css/",
	js : "assets/js/notifyme.js"
};

gulp.task('js-min', function(){
    gulp.src(paths.js)
        .pipe(uglify())
        .on('error', function(err) {
            console.log('ERROR:', err.message);
        })
        .pipe(rename('notifyme.min.js'))
        .pipe(gulp.dest('assets/js/'))
});

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
