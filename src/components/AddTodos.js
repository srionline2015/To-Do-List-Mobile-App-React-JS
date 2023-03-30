import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: '',
    date: '',
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.date);
    this.setState({ title: '', date: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: 'flex', padding: '0 10px' }}
      >
        <div class="pb-2">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-row align-items-center">
                <input
                  type="text"
                  name="title"
                  style={{ flex: '10', padding: '5px' }}
                  placeholder="Add Todo ..."
                  value={this.state.title}
                  onChange={this.onChange}
                />
                <input
                  type="date"
                  name="date"
                  style={{ flex: '10', padding: '5px' }}
                  placeholder="Add Date ..."
                  value={this.state.date}
                  onChange={this.onChange}
                />
                <div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    style={{ flex: '1' }}
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
