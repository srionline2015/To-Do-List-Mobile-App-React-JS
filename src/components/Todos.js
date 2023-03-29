import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let completed = this.props.showCompleted;

    return this.props.todos
      .filter((f) => f.completed == completed)
      .map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      ));
  }
}

// Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
