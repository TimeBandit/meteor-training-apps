CarouselControls = React.createClass({

	render: function() {
		return (
			<span>
				<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
			    	<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			    	<span className="sr-only">Previous</span>
			  	</a>
			  	<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
			    	<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			    	<span className="sr-only">Next</span>
			  	</a>
			</span>
		)
	}})