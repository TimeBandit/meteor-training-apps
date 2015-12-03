// create global helpers

Template.registerHelper('isStaff', function(){
	if (Meteor.user().profile.usertype === 'staff') {
		return true;
	};
})

// Format the date using Moment.js
Template.registerHelper('formatDate', function(date){
	return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

// Capitalize first letter
Template.registerHelper('capFirst', function(text){
	return text.charAt(0).toUpperCase() + text.slice(1);
});