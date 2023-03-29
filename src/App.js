import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodos';
import './style.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Go food shopping',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner party',
        completed: false,
      },
      {
        id: 3,
        title: 'Hit the gym',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  randomNum() {
    var num = Math.round(Math.random() * 50 + 1);
    return num;
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.randomNum(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">          
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
