import React, { Component } from 'react';
import TodoModel from '../models/Todo';

class TodosContainer extends Component {
	render() {
		TodoModel.all().then( (res) => {
			console.log(res);
		})
		return (
			<div className='todosContainer'>
				<h2>I'm your Todos Container</h2>
			</div>
		);
	}
}

export default TodosContainer;
