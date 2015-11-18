// The map function is placing an index property inside every
// question object, and spitting out the same cursor.
Template.questions.helpers({
	questions: function () {
		return Questions.find({}).map(function (question, index) {
			question.i = index;
			return question;
		});;
	}
});