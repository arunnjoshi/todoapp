import React from 'react';


const Todos = ({ todos, deleteTodo }) => {


	let todosList = todos.length > 0 ? todos.map( todo => {
		return (
			<div className="collection-item" key={ todo.id } onClick={ () => deleteTodo(todo.id) }>
				<span>{ }{ todo.content }</span>
			</div>
		)
	}) : <p className="center">Todos List is empty</p>;
	return (<div className="collection todo">
		{todosList }
	</div>);
}

export default Todos;