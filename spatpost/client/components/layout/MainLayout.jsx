MainLayout = React.createClass({
	componentDidMount: function() {
		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
			console.log('toggle clicked');
		});
	},
	
	render: function() {
		return (
			<div>
				{this.props.sidebar}

				{this.props.content}				
			</div>
		);
	}

});

