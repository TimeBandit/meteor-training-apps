// Define collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

// only on client
if (Meteor.isClient) {

	Meteor.subscribe("tasks");
	
	// This code is executed on the client only
  	Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    // render the component called APP on startup
    ReactDOM.render(<App />, document.getElementById("render-target"));    
  });
}

// only on server
if (Meteor.isServer) {
	Meteor.publish("tasks", function () {
    return Tasks.find();
  });
};

// on both client and server
Meteor.methods({
	addTask(text) {
		Tasks.insert({
			text: text,
			createdAt: new Date()
		})
	},

	removeTask(taskId) {
		Tasks.remove(taskId);
	},

	setChecked(taskId, setChecked) {
		Tasks.update( taskId,  {$set: {checked: setChecked} });
	}
});