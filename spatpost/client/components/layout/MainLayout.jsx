MainLayout = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.sidebar}

				{this.props.content}				
			</div>
		);
	}

});

