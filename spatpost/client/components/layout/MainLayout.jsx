MainLayout = React.createClass({

	componentWillMount: function() {
		console.log('gosh this takes ages');
	},

	componentDidMount: function() {
		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
			console.log('toggle clicked');
		});

		//replace IMG inside carousels with a background image
			  $('#carousel-example-generic .item img').each(function() {
			  	var imgSrc = $(this).attr('src');
			  	console.log(imgSrc);
			    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
			    $(this).remove();
			  });
	},
	
	render: function() {
		return (
			<div>
				{this.props.sidebar}

				{this.props.content}				
			</div>
		);
	}

});

