if (Meteor.isServer) {
	Inject.rawHead("loader", Assets.getText('spinners/spinner1.html'));
}

if (Meteor.isClient) {
	Meteor.startup(function() {
		setTimeout(function() {
			$(".spinbox-").fadeOut(500, function() { $(this).remove(); });
		}, 500);
	});
}