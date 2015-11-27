// data to publish to the client, this because the data held in mini mongo
// subscriptions in common.js in client foder
Meteor.publish('products', function () {
	return Products.find();
})

Meteor.publish('categories', function () {
	return Categories.find();
})