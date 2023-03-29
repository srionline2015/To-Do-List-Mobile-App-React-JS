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
        title: 'Pick up mail',
        date: '29/03/2023',
        completed: false,
      },
      {
        id: 2,
        title: 'Buy cat food',
        date: '29/03/2023',
        completed: false,
      },
      {
        id: 3,
        title: 'Get gift for grandma',
        date: '29/03/2023',
        completed: false,
      },
      {
        id: 4,
        title: 'Doctor appointment',
        date: '29/03/2023',
        completed: false,
      },
      {
        id: 5,
        title: 'Renew registration',
        date: '29/03/2023',
        completed: true,
      },
      {
        id: 6,
        title: 'HIIT workout',
        date: '29/03/2023',
        completed: true,
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

  addTodo = (title, date) => {
    const newTodo = {
      id: this.randomNum(),
      title: title,
      date,
      date,
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
            showCompleted={false}
          />
          <h5>COMPLETED</h5>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
            showCompleted={true}
          />
        </div>
      </div>
    );
  }
}

export default App;
