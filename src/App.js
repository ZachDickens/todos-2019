import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "Foo",
      todos: ["Add a todo", "Remove todo"]
    };
  }
  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };
  setText = text => {
    this.setState({ currentItemText: text });
  };
  render() {
    return (
      <div>
        <AddTodo text={this.state.currentItemText} setText={this.setText} />
        <TodoList todos={this.state.todos} />

        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

export default App;
