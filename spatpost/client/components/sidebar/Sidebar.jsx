Sidebar = React.createClass({

	render: function() {
		return (
			/* Menu */
			<nav class="menu" id="theMenu">
				<div class="menu-wrap">
					<h1 class="logo"><a href="index.html#home">Minimal</a></h1>
					<i class="icon-remove menu-close"></i>
					<a href="#home" class="smoothScroll">Home</a>
					<a href="#about" class="smoothScroll">About</a>
					<a href="#portfolio" class="smoothScroll">FAQ</a>
					<a href="#contact" class="smoothScroll">Contact</a>
				</div>
				
				{/* Menu button */}
				<div id="menuToggle"><i class="icon-reorder"></i></div>
			</nav>
		);
	}

});