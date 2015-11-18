// specify the base layout to be used for templates
Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function(){
	this.render('questions');
});