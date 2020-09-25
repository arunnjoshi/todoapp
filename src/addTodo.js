import React, { Component } from 'react';

class AddTodo extends Component {


	state = {
		content: null
	}

	handleChange = (e) => {
		e = e.target;
		this.setState({ content: e.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let content = this.state;
		if (this.state.content.trim().length >= 3) {
			document.getElementById('add-todo').reset();
			this.props.addTodo(content);
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.handleSubmit } id="add-todo">
					<label className="">Add new  Todo:</label>
					<input type="text" className="" onChange={ this.handleChange } />
				</form>
			</div>
		)
	}
}

export default AddTodo;