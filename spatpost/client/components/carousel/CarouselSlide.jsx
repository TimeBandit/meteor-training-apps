CarouselSlide = React.createClass({

	render: function() {
		return (
			<div className={this.props.index === 0 ? "item active": "item"}>
				{this.props.contents}
			</div>
		);
	}
});