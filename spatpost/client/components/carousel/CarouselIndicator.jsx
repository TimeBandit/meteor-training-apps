CarouselIndicator = React.createClass({

	render: function() {
		return (
			<li data-target="#carousel-example-generic" data-slide-to={this.props.slidenum} className={this.props.slidenum === 0 ? "active" : ""}></li>
		);
	}

});