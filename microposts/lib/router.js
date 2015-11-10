Router.configure({
	layoutTemplate: 'layout'
});

// Router.map(function (argument) {
// 	this.route('posts', {
// 		path: '/',
// 		template: 'posts'
// 	})
// })

Router.route('/posts', function () {
  this.render('posts');
 });

Router.route('/about', function () {
  this.render('about');
 });

Router.route('/', function () {
  this.render('layout');
 });