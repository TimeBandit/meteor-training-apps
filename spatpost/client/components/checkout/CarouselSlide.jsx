CarouselSlide = React.createClass({

	render: function() {
		const taskClassName = this.props.index === 0 ? "item active" : "item";
		return (
			<div className={taskClassName}>
      			<img src="..." alt="..." />
			      <div className="carousel-caption">
			        {this.props.content}
			      </div>
			</div>
		);
	}
});