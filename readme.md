What's notifyMe?
----------------

notifyMe is a simple plugin that i created for fun and learning for fixed notifications in pages.
He works when a button is clicked, errors, validations, info and everything you want.

Get Started
----------------

notifyMe is a simple plugin that i created for fun and learning for fixed notifications in pages.
He works when a button is clicked, errors, validations, info and everything you want.

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
	
How to use
----------

For use this plugin is necessary add jQuery lib in your page:

    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

Add the notifyMe.js after jquery lib:

    <script type="text/javascript" src="assets/js/notifyme.js"></script>

in a element is simple, for use when click in a button for example:

    $('.error').on('click', function(){
        $(this).notifyMe(
            'bottom', // Position
            'error', // Type
            'Lorem Ipsum Text', // Title
            'Lorem ipsum dolos lorem uisnsnd h jsakdh ajkdbh', // Description
            200 // Velocity of notification
        );
    });
