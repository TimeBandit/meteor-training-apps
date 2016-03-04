if (Meteor.isServer){
  var T = new Twit({
    consumer_key:         'fdSe5vUc99welC30DOp2ltaca',
    consumer_secret:      'XpOLMlhxLydmdF1qjQKPqF7sqI9iYpuBRY1E2Jhp0ZkZkQGrtd', 
    access_token:         '610359512-xCEh6tFIt14lP1ouZ6TFo2PKPR4FJ4N8XxiMlXfQ', 
    access_token_secret:  '39boff7gryzbzB1cWOAwvZ0w9RY47Wu5Uqih5RnIbEo69'
  });

  var args = {
    count: 20,
    user_id: 'MagnumPhotos',
    screen_name: 'MagnumPhotos'
  };

  Meteor.methods({
    'chargeCard': function(stripeToken) {
      var Stripe = StripeAPI(Meteor.settings.private.stripe);

      Stripe.charges.create({
        amount: 1000,
        currency: 'usd',
        source: stripeToken
      }, function(err, charge) {
        console.log(err, charge);
      });
    },

    'fetchTweets': function(){      

      var wrapGet = Meteor.wrapAsync(T.get, T);
      var result = wrapGet('statuses/user_timeline', args);
      // ft = Meteor.wrapAsync(T.get('statuses/user_timeline', args, callback), this);

      // console.log(result); 
      return result;

      
    }
  });
}