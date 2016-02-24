CarouselIndicators = React.createClass({

	render: function() {
		return (
			<ol className="carousel-indicators">
    			<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    			<li data-target="#carousel-example-generic" data-slide-to="1"></li>
    			<li data-target="#carousel-example-generic" data-slide-to="2"></li>
  			</ol>
		);
	}

});