import React, { Component } from 'react';
import AddTodo from './addTodo.js';
import Todos from './todo.js';
class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy some milk', },
      { id: 2, content: 'play CSGO', },
      { id: 3, content: 'watch IPL ', },
    ]
  }; milk


  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos });
  }

  addTodo = (todo) => {
    let todos = [...this.state.todos];
    let lastId = todos[todos.length - 1];
    todo.id = lastId + 1;
    todos.push(todo);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }  />
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    );
  }
}

export default App;
