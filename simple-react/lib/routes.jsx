// the jsx extension allows you to write es6 code
FlowRouter.route('/', {
	name: 'Home',
	action(params) {
		renderMainLayout(<Home />);
	}
})

FlowRouter.route('/login', {
	name: 'Login',
	action(params) {
		renderMainLayout(<UserLogin />);
	}
})

function renderMainLayout(component){
	ReactLayout.render(MainLayout, {
		header: <Header />,
		content: component,
		footer: <Footer />
	});
}