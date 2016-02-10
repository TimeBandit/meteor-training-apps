Sidebar = React.createClass({

	render: function() {
		return (
			/* Menu */
			<nav className="menu" id="theMenu">
				<div className="menu-wrap">
					<h1 className="logo"><a href="index.html#home">Spatpost</a></h1>
					<i className="menu-close"><span className="glyphicon glyphicon-remove"></span></i>
					<a href="#home" className="smoothScroll"><span className="glyphicon glyphicon-home"></span></a>
					<a href="#about" className="smoothScroll">About</a>
					<a href="#portfolio" className="smoothScroll">FAQ</a>
					<a href="#contact" className="smoothScroll">Contact</a>
				</div>
				
				{/* Menu button */}
				<div id="menuToggle"><i className="glyphicon glyphicon-menu-hamburger"></i></div>
			</nav>
		);
	}

});