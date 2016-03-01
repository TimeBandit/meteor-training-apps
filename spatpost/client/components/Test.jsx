Test = React.createClass({
    getInitialState: function() {
        return {
            data: [] 
        };
    },

    handlePayment: function(e){
		e.preventDefault();
		console.log(Meteor.settings);
		StripeCheckout.open({
            key: Meteor.settings.public.stripe,
            amount: 5000, // this is equivalent to $50
            name: 'Meteor Tutorial',
            description: 'On how to use Stripe ($50.00)',
            panelLabel: 'Pay Now',
            token: function(res) {
            	stripeToken = res.id;
              	console.info(res);
              	Meteor.call('chargeCard', stripeToken);
            }
          });
	},

    getTweets: function(){        
        Meteor.call('fetchTweets', function(error, result){
            var res = [];
            
            // cycle through the results and build react elements
            _.each(result, function(value, key, list){
                var {created_at, text, ...other} = value;
                
                if (value.entities.media != undefined) {
                    // no image
                    let node = (
                        <div>
                            <p>{created_at}</p>
                            <p>{text}</p>
                        </div>                        
                    );
                    console.log(node);
                    res.push(node);                  
                } else {
                    // has image
                    let node = (
                        <div>
                            <img src={value.entities.media[0].media_url} alt=""/>
                            <p>{created_at}</p>
                            <p>{text}</p>
                        </div>                        
                    );
                    res.push(node);                  
                }
            });
            console.log(res);
            return res;              
        });        
    },

	render: function() {

        return (
			<div>
				<form action="/charge" method="POST">
                    <label htmlFor="test">Test Input</label>
                    <input type="text" name="test" />
                    <a href="#" className="btn btn-default" onClick={this.handlePayment}>BUY NOW</a>
                </form>
                <div className="alltweets">{this.getTweets()}</div>
			</div>			
		);
	}
});