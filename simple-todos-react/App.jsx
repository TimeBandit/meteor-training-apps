// App component - represents the whole app
App = React.createClass({
  
  // This mixin makes the getMeteordata method work
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      hideCompleted: false
    }
  },

  // Loads items from the Tasks collection and puts on this.data.task
  getMeteorData() {

    // 'let' declares a block scope variable
    // the placeholder for the query object
    // with this pattern state can control what data
    // is fetched
    let query = {};

    if (this.state.hideCompleted) {
      // if hideCompleted is checked, filter tasks
      query = {checked: {$ne: true}};
    };

    // access the data via this.data
    return {
      tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: {$ne: true}}).count()
    };
  },

  getTasks() {
    return [
      { _id: 1, text: "This is task 1" },
      { _id: 2, text: "This is task 2" },
      { _id: 3, text: "This is task 3" }
    ];
  },

  renderTasks() {
    var res = this.data.tasks.map((task) => {
      // return an array of react elements
      return <Task key={task._id} task={task} />;
    });
    // console.log(res);
    return res;
  },

  handleSubmit(event){
    // prevent the form being submitted
    event.preventDefault();

    // find the text field via the React ref
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    console.log(text);

    // Insert the new task
    Meteor.call("addTask", text);

    // clear the form
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },

  toggleHideCompleted() {

    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          {/* <ReactAccounts.LoginForm/> */}
          <h1>Todo List ({this.data.incompleteCount})</h1>
            <label className="hide-completed">
              <input
                type="checkbox"
                readOnly={true}
                checked={this.state.hideCompleted}
                onClick={this.toggleHideCompleted} />
              Hide Completed Tasks
            </label>
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