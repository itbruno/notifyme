// Notifications
(function($){
	'use strict';

	// Define plugin name and parameters
	$.fn.notifyMe = function($position, $type, $title, $content, $velocity, $delay){
		// Remove recent notification for appear new
		$('.notify').remove();
        // Function to prepare content
        function prepareContent($content){
            if(typeof $content == 'object'){
                var itemsList ="";
                for(var key in $content){
                    console.log($content[key]);
                    if(typeof $content[key] == 'object'){
                        itemsList += singleItemTemplate($content[key][0]);
                    }else{
                        itemsList += singleItemTemplate($content[key]);
                    }
                }
                return itemsList;
            }
            return $content;
        }
        // Function to prepare Single item HTML 
        function singleItemTemplate(text){
            return '<li class="notify-single-item">'+ text+'</li>';
        }

		// Create the content of Alert
		var close = "<a class='notify-close'>x</a>";
		var header = "<section class='notify' data-position='"+ $position +"' data-notify='" + $type + "'>" + close + "<h1>" + $title + "</h1>";
		var content =  "<div class='notify-content'>" + prepareContent($content) + "</div></section>";

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

		// Show notifications
		switch($position) {
			case "bottom":
				openNotification('bottom');
				break;

			case "top":
				openNotification('top');
				break;

			case "left":
				openNotification('left');
				break;

			case "right":
				openNotification('right');
				break;
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

		// Close Notification
		$('.notify-close').click(function(){
			// Move notification
			switch($position) {
				case "bottom":
					closeNotification('bottom');
					break;

				case "top":
					closeNotification('top');
					break;

				case "left":
					closeNotification('left');
					break;

				case "right":
					closeNotification('right');
					break;
			}
		});
	}
}(jQuery));






