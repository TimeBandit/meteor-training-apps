CarouselSlides = React.createClass({
	renderSlides: function(){
		res = _.map(this.props.slides, function(slide, index, list){
		return <CarouselSlide key={index} contents={slide} />
		});
	},

	render: function() {
		return (
			<div className="carousel-inner" role="listbox">
			    {this.renderSlides()}
  			</div>
		);
	}

});