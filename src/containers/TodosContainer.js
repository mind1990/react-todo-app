import CreateTodoForm from '../components/CreateTodoForm'
import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos'

class TodosContainer extends Component {
	constructor() {
		super()
		this.state = {
			todos: []
		}
		this.createTodo = this.createTodo.bind(this);
	}
	componentDidMount() {
		this.fetchData()
	}
	fetchData() {
		TodoModel.all().then( (res) => {
			this.setState ({
				todos: res.data.todos,
				todo: ''
			})
		})
	}
	createTodo(todo) {
		let newTodo = {
			body: todo,
			completed: false
		}
		TodoModel.create(newTodo).then( (res) => {
			let todos = this.state.todos
			let newTodos = todos.push(res.data)
			this.setState({newTodos})
		})
	}
	render() {
		return (
			<div className='todosContainer'>
				<Todos
					todos={this.state.todos} />
				<CreateTodoForm
					createTodo={ this.createTodo }
				/>
			</div>
		);
	}
}

export default TodosContainer;
