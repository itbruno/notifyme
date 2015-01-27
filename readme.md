What's notifyMe?
----------------

notifyMe is a simple plugin that i created for fun and learning for fixed notifications in pages.
He works when a button is clicked, errors, validations, info and everything you want.

Get Started
----------------

notifyMe is a simple plugin that i created for fun and learning for fixed notifications in pages.
He works when a button is clicked, errors, validations, info and everything you want.

Open terminal, and install the [Gulp][1] globally(if you don't have installed)
```
$ npm install --global gulp
```

After install gulp, install all dependencies of the project.
```
$ npm install
```

Gulpfile
---------------------
In `gulpfile.js` we have just one task for compile sass. Write in terminal:
```
$ gulp compile-sass
```

or `gulp watch` for watch the changes and auto compile:
```
$ gulp watch
```

How to use
----------

Call the stylesheet with the styles
```html
<link rel="assets/css/notifyme.css" type="text/css" />
```

For use this plugin is necessary add jQuery lib in your page:
```html
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
```

Add the notifyMe.js after jquery lib:
```html
<script type="text/javascript" src="assets/js/notifyme.js"></script>
```

in a element is simple, for use when click in a button for example:
```js
$('.error').on('click', function(){
	$(this).notifyMe(
		'bottom', // Position
		'error', // Type
		'Example Title', // Title
		'Some text to show in your notification', // Description
		200 // Velocity of notification
		2000 // (optional) Time of delay to close automatically
	);
})
```
[1]: http://www.gulpjs.com
