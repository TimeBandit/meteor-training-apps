Test = React.createClass({

	render: function() {
		return (
			<div>
				<form action="/charge" method="POST">
                  <script
                    src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                    data-key="pk_test_6A3exU61VDDFQfeXGAntCPyn"
                    data-image="/images/svg-loaders/audio.svg"
                    data-name="Demo Site"
                    data-description="2 widgets"
                    data-zip-code="true"
                    data-currency="gbp"
                    data-amount="2000"
                    data-locale="auto">
                  </script>
                </form>
			</div>
		);
	}

});