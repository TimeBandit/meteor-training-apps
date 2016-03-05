if (Meteor.isServer) {
	// Inject the spinner HTML into the head
	Inject.rawBody("loader", Assets.getText('spinner.html'));
}

if (Meteor.isClient) {
	Meteor.startup(function() {
		// remove the spinner from the DOM after a delay
		setTimeout(function() {
			$(".spinner").fadeOut(50, function() { $(this).remove(); });

			console.log('init masonry plugin');
			var $grid = $('.grid').masonry({
	            // options
	            itemSelector: '.grid-item',
	            columnWidth: 200,
	            gutter: 10
	        });
		}, 5000);


		
		


	});
}