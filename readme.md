How to use
---------------------
Open terminal, in the path of project, install the gulp

	$ npm install --save-dev gulp
After install gulp, install `gulp-sass-ruby` ([read documentation](https://npmjs.org/package/gulp-ruby-sass/)).

	$ npm install --save-dev gulp-ruby-sass

Gulpfile
---------------------
In `gulpfile.js` we have just one task for compile sass. Write in terminal:

	$ gulp compile-sass
or `gulp watch` for watch the changes and auto compile:

	$ gulp watch