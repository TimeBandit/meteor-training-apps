Router.configure({
    layoutTemplate: 'layout'
});

// Router.map(function (argument) {
// 	this.route('posts', {
// 		path: '/',
// 		template: 'posts'
// 	})
// })

Router.route('/', function() {
    this.render('posts');
}, {
    name: 'posts'
});

Router.route('/about', function() {
    this.render('about');
});
