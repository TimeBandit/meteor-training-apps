Meteor.publish('posts', function () {
	return Posts.find();
});

Meteor.publish('UserImages', function () {
	return UserImages.find();
});