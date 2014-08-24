// Notifications
(function($){
	// Define plugin name and parameters
	$.fn.notifyMe = function($type, $title, $content, $velocity){
		// Remove recent notification for appear new
		$('.notify').remove();
		
		// Create the content of Alert
		var close = "<a class='notify-close'>x</a>";
		var header = "<section class='notify' data-notify='" + $type + "'>" + close + "<h1>" + $title + "</h1>";
		var content =  "<div class='notify-content'>" + $content + "</div></section>";

		var notifyModel = header + content;

		$('body').prepend(notifyModel);

		var notifyHeigth = $('.notify').outerHeight();

		// Show Notification
		$('.notify').css('bottom', '-' + notifyHeigth);
		$('.notify').animate({
			bottom: '0px'
		},$velocity);

		// Move Body
		$('body').animate({
			marginTop: '-' + notifyHeigth + 'px'
		},$velocity);

		// Close Notification
		$('.notify-close').click(function(){
			// Move body for up
			$('body').animate({
				marginTop: '0px'
			},$velocity);

			// Move notification for up
			$(this).parent('.notify').animate({
				bottom: '-' + notifyHeigth
			},$velocity);

			// Remove item when close
			setTimeout(function(){
				$('.notify').remove();
			},$velocity + 200);

		});
	}
}(jQuery));






