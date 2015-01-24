// Notifications
(function($){
	'use strict';

	// Define plugin name and parameters
	$.fn.notifyMe = function($position, $type, $title, $content, $velocity, $delay){
		// Remove recent notification for appear new
		$('.notify').remove();

		// Create the content of Alert
		var close = "<a class='notify-close'>x</a>";
		var header = "<section class='notify' data-position='"+ $position +"' data-notify='" + $type + "'>" + close + "<h1>" + $title + "</h1>";
		var content =  "<div class='notify-content'>" + $content + "</div></section>";

		var notifyModel = header + content;

		$('body').prepend(notifyModel);

		var notifyHeight = $('.notify').outerHeight();

		// Function to show notification
		function openNotification(position) {
			var close = {};
			var show = {};
			close[position] = '-' + notifyHeight;
			show[position] = '0px';

			// Show notification
			$('.notify').css(position, '-' + notifyHeight);
			$('.notify').animate(show,$velocity);

			// Close Notifications automatically
			if(typeof $delay !== 'undefined') {
				setTimeout(function(){
					$('.notify').animate(close,$velocity);

					// Remove item when close
					setTimeout(function(){
						$('.notify').remove();
					},$velocity + 100);
				},$delay);
			}
		}

		// Function to close notifications
		function closeNotification(position) {
			var options = {};
			options[position] = '-' + notifyHeight;
			$('.notify').animate(options, $velocity);

			// Remove item when close
			setTimeout(function(){
				$('.notify').remove();
			},$velocity + 100);
		}

		// Show notifications
		if($position == "bottom"){
			// Show notification
			openNotification('bottom');
		}

		else if($position == "top"){
			// Show notification
			openNotification('top');
		}

		else if($position == "right"){
			// Show notification
			openNotification('right');
		}

		else if($position == "left"){
			// Show notification
			openNotification('left');
		}

		// Close Notification
		$('.notify-close').click(function(){
			// Move notification
			if($position == "bottom"){
				closeNotification('bottom');
			}
			else if($position == "top"){
				closeNotification('top');
			}
			else if($position == "right"){
				closeNotification('right');
			}
			else if($position == "left"){
				closeNotification('left');
			}
		});
	}
}(jQuery));






