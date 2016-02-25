CarouselIndicators = React.createClass({
	renderIndicators: function(){
		var res = _.map(_.range(this.props.numslides), function(slidenum, index, list){
			return <CarouselIndicator key={index} slidenum={slidenum}/>
		});
		return res
	},

	render: function() {
		return (			
			<ol className="carousel-indicators">
    			{this.renderIndicators()}
  			</ol>
		);
	}

});