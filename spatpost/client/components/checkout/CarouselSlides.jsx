CarouselSlides = React.createClass({

	render: function() {
		return (
			<div className="carousel-inner" role="listbox">
			    {this.props.slides}
  			</div>
		);
	}

});
