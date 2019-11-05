import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';

import { task } from './task.json';

class App extends Component {
	constructor (){
		super();

		this.state={
			task
		};

		this.handleAddTask = this.handleAddTask.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	removeTodo(index) {
	    this.setState({
	      task: this.state.task.filter((e, i) => {
	        return i !== index
	      })
	    });
	  }

	handleAddTask(todo) {
	    this.setState({
	      task: [...this.state.task, todo]
	    })
	  }


	render(){
		const task = this.state.task.map((task, i) => {
			return(
				<div className="col-md-4" key={i}>
					<div className="card mt-4">
				        <div className="card-title text-center">
				            <h3>{task.title}</h3>
				            <span className="badge badge-pill badge-danger ml-2">
				                {task.priority}
				            </span>
				        </div>
				        <div className="card-body">
				            {task.description}
				        </div>
				        <div className="card-footer">
			              <button
			                className="btn btn-danger"
			                onClick={this.removeTodo.bind(this, i)}>
			                Delete
			              </button>
			            </div>
				    </div>
				</div>
			)
		});

		return(
			<div className="App">
				<nav className="navbar navbar-dark bg-dark">
		          <a className="navbar-brand" href="/">
		            Tasks
		            <span className="badge badge-pill badge-light ml-2">
		              {this.state.task.length}
		            </span>
		          </a>
         		</nav>
         		 <div className="container">
          			<div className="row mt-4">
         				<div className="col-md-4 text-center">
		                	<TaskForm onAddTodo={this.handleAddTask}></TaskForm>
		         		</div>	         		
		         		<div className="col-md-8">
			              <div className="row">
			                {task}
			              </div>
			            </div>
         			</div>
         		</div>
			</div>
		)
	}  
}

export default App;
