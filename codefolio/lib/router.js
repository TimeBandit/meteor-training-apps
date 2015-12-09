Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
	template: 'home'
});

Router.route('about');

Router.route('work');

Router.route('contact');

Router.route('/blog', {
	name: 'blog',
	template: 'blog'
})

Router.route('/admin/posts', {
	name: 'list_posts',
	template: 'list_posts'
});

Router.route('/admin/posts/add', {
	name: 'add_posts',
	template: 'add_posts'
});

Router.route('/admin/posts/:_id/edit', {
	name: 'edit_post',
	template: 'edit_post'
});

Router.route('/admin/projects', {
	name: 'list_projects',
	template: 'list_projects'
});

Router.route('/admin/projects/add', {
	name: 'add_project',
	template: 'add_project'
});

Router.route('/admin/projects/:_id/edit', {
	name: 'edit_project',
	template: 'edit_project'
});

Router.route('/admin', {
	name: 'login',
	template: 'login'
});