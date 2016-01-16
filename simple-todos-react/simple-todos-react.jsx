// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

	Meteor.subscribe("tasks");
	
	// This code is executed on the client only
  	Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    // render the component called APP on startup
    ReactDOM.render(<App />, document.getElementById("render-target"));    
  });
}

if (Meteor.isServer) {
	Meteor.publish("tasks", function () {
    return Tasks.find();
  });
};

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