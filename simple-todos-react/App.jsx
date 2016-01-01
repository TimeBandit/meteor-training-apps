// App component - represents the whole app
App = React.createClass({
  
  // This mixin makes the getMeteordata method work
  mixins: [ReactMeteorData],

  // Loads items from the Taks collection and puts on this.data.task
  getMeteorData() {
    return {
      tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  getTasks() {
    return [
      { _id: 1, text: "This is task 1" },
      { _id: 2, text: "This is task 2" },
      { _id: 3, text: "This is task 3" }
    ];
  },

  renderTasks() {
    return this.data.tasks.map((task) => {
      // return an array of HTML strings
      return <Task key={task._id} task={task} />;
    });
  },

  handleSubmit(event){
    event.preventDefault();

    // find the text field via the React ref
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    // Insert the new task
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });

    // clear the form
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
            <form className="new-task" onSubmit={this.handleSubmit}>
              <input type="text" ref="textInput" placeholder="Type to add new tasks" />
            </form>   
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});