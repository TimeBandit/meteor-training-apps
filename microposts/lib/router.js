Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('posts');
});

Router.route('/posts', function() {
    Router.go('/');
});

Router.route('/about', function() {
    this.render('about');
});

Router.route('/profile', function() {
    this.render('profile');
});
