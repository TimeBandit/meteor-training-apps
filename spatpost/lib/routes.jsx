// the jsx extension allows you to write es6 code

FlowRouter.route('/', {
	name: 'Home',
	action(params) {
		renderMainLayout(<Home />);
	}
})

FlowRouter.route('/about', {
	name: 'Login',
	action(params) {
		renderMainLayout(<About />);
	}
})

FlowRouter.route('/contact', {
	name: 'Login',
	action(params) {
		renderMainLayout(<Contact />);
	}
})

FlowRouter.route('/test', {
	name: 'Login',
	action(params) {
		renderMainLayout(<Test />);
	}
})

FlowRouter.route('/orderform', {
	name: 'Login',
	action(params) {
		renderMainLayout(<OrderForm />);
	}
})

function renderMainLayout(component){
	ReactLayout.render(MainLayout, {
		content: component,
		sidebar: <Sidebar />
	});
}