import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id
      }
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid() 
      },
    });
  };

  deleteTask = (e) => {
    // // this removes the item from the array, but not the page
    // this.setState({
    //   tasks: this.state.tasks.splice(this.state.task, 1),
    // })
    // console.log(this.state.tasks)
    
    const name = e.target.getAttribute("name");
    this.setState({
      tasks: this.state.tasks.filter(function(task){
        return task.text !== name;
      }),
    })
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
