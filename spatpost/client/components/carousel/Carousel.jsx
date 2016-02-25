Carousel = React.createClass({
	// gets passed in a prop of slide contents
	// generates the carousel

	componentDidMount: function() {
		$(function(){
		  $('.carousel').carousel();
		});
	},

	render: function() {
		return (
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
				<CarouselIndicators numSlides={this.props.slides.length}/>
				<CarouselSlides slides={this.props.slides} />
				<CarouselControls />
			</div>
		);
	}

});