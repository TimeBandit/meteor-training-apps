// declare a collection for the questions
Questions = new Mongo.Collection('questions', {});

// attach a schema to the collection, improves security
Questions.attachSchema(new SimpleSchema({
	question: {
		type: String,
		label: 'Question',
		max: 500,
		optional: false
	},
	answer: {
		type: String,
		label: 'Answer',
		optional: false
	}
}));