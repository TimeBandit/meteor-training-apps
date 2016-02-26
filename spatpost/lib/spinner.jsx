if (Meteor.isServer) {
	// Inject the spinner HTML into the head
	Inject.rawBody("loader", Assets.getText('spinner.html'));
}

if (Meteor.isClient) {
	Meteor.startup(function() {
		// remove the spinner from the DOM after a delay
		setTimeout(function() {
			$(".spinner").fadeOut(50, function() { $(this).remove(); });
		}, 5000);

		Stripe.setPublishableKey('pk_test_6A3exU61VDDFQfeXGAntCPyn');

	});
}