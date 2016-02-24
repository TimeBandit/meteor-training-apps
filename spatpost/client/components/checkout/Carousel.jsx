Carousel = React.createClass({
	// gets passed in a prop of slide contents
	// generates the carousel

	render: function() {
		return (
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
				<CarouselIndicators numSlides={_.size(this.props.slides)}/>
				<CarouselSlides slides={this.props.slides}/>
				<CarouselControls />
			</div>
		);
	}

});