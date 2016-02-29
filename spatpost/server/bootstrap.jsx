if (Meteor.isClient) {
	Meteor.startup(function() {
		T = new Twit({
			consumer_key:         'fdSe5vUc99welC30DOp2ltaca',
			consumer_secret:      'XpOLMlhxLydmdF1qjQKPqF7sqI9iYpuBRY1E2Jhp0ZkZkQGrtd', 
			access_token:         '610359512-xCEh6tFIt14lP1ouZ6TFo2PKPR4FJ4N8XxiMlXfQ', 
			access_token_secret:  '39boff7gryzbzB1cWOAwvZ0w9RY47Wu5Uqih5RnIbEo69'
		});
});
}