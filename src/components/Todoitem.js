import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      margin: '0 10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.markComplete ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title, date, completed } = this.props.todo;
    console.log(completed);
    return (
      <>
        <th scope="row">
          <div class="form-check">
            {!completed ? (
              <input
                type="checkbox"
                onChange={this.props.markComplete.bind(this, id)}
              />
            ) : (
              <input type="checkbox" checked
              onChange={this.props.markComplete.bind(this, id)}
              />
            )}
          </div>
        </th>
        <td>{title}</td>
        <td>
          <span style={spanStyle}>{date}</span>
        </td>
      </>
    );
  }
}

// Prop Types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const spanStyle = {
  color: '#111',
  border: 'none',
  padding: '3px 8px 5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  outline: 'none',
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '3px 8px 5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  outline: 'none',
};

export default TodoItem;
