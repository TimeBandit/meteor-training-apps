// The map function is placing an index property inside every
// question object, this index will be used within the template
Template.questions.helpers({
	questions: function () {
		return Questions.find({}).map(function (question, index) {
			question.i = index;
			return question;
		});;
	}
});