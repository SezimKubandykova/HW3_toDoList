import React from "react";


class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Список дел</h3>
        {/* <TodoList items={this.state.items} /> */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Что нужно сделать?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Добавить #{this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    );
  }
}

export default ToDo;