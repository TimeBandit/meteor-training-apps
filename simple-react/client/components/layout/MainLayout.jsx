MainLayout = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.header}

				{this.props.content}

				{this.props.footer}
			</div>
		);
	}

});

