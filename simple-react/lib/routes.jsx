// the jsx extension allows you to write es6 code
FlowRouter.route('/', {
	name: 'Home',
	action(params) {
		ReactLayout.render(Home);
	}
})