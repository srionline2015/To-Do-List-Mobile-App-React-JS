import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let completed = this.props.showCompleted;

    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Todo Description</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos
              .filter((f) => f.completed == completed)
              .map((todo) => (
                <tr>
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    markComplete={this.props.markComplete}
                    delTodo={this.props.delTodo}
                    showCompleted={completed}
                  />
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

// Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
