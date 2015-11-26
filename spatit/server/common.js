// data to publish to the client
// subscriptions in common.js in client foder
Meteor.publish('products', function () {
	return Products.find();
})

Meteor.publish('categories', function () {
	return Categories.find();
})