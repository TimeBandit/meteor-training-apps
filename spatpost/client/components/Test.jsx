Test = React.createClass({
    getInitialState: function() {
        var self = this;
        
        Meteor.call('fetchTweets', function(error, result){
            console.info('callback returning');
            self.setState({
                 tweets: result
             });
        });
        
        return {
            tweets: [] 
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

    renderTweets: function(){
        var res = [],
            tweets = this.state.tweets;
            console.info('inside renderTweets');
            console.info(tweets); 

        _.each(tweets, function(value, key, list){
                var {created_at, text, ...other} = value;
                
                let node = null;

                if (value.entities.media != undefined) {
                    // has image
                    console.info('has image');
                    // console.log(value.entities.media[0].media_url);
                    node = (
                        <div key={key}>
                            <img src={value.entities.media[0].media_url} alt=""/>
                            <strong>{text}</strong>
                            <p>{created_at}</p>
                        </div>                        
                    );
                    
                } else {
                    // no image
                    console.info('no image');
                    node = (
                        <div key={key}>
                            <strong>{text}</strong>
                            <p>{created_at}</p>
                        </div>                        
                    );                                      
                }
                // console.info(node);
                res.push(node);
            });
        return res;      
    },

	render: function() {
        return (
			<div>
				<form action="/charge" method="POST">
                    <label htmlFor="test">Test Input</label>
                    <input type="text" name="test" />
                    <a href="#" className="btn btn-default" onClick={this.handlePayment}>BUY NOW</a>
                </form>
                <div className="alltweets">{this.renderTweets()}</div>
			</div>			
		);
	}
});