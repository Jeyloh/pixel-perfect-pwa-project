import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';


const appState = observable({
  counter: 0,
  timer: 0
});
appState.resetTimer = action( () => {
  appState.timer = 0;
})



setInterval(action(function tick() {
  appState.timer += 1;
}), 1000)

@observer
class TodoListView extends Component {

  onReset = () => {
    this.props.appState.resetTimer();
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    console.log(event.target.name, ": ", event.target.value);
  }


  renderTodos = () => {
    const todos = this.props.appState.todos;
    let temp = [];

    for (let i = 0; i < todos.length; i++) {
      temp.push(
          <li>
            <button onClick={() => this.props.appState.removeItem(i)}>X</button>
            #{i}: {todos[i]}
          </li>
      );
    }
    if (temp.length > 0)
      return temp;
    else
      return <p>Todolist is empty</p>
  }


  render() {
    return (
      <div className="todo-list-wrapper">
        <ul className="todo-list">
          <h1 className="todo-header">Todo list:</h1>
          {this.renderTodos()}
        </ul>
        <input name="addTodo" className="todo-input" onChange={this.handleChange} placeholder="Add todo" />
        <button className="todo-button" onClick={() => this.props.appState.add(this.state.addTodo)}>Add</button>
        <h1>MobX'oClock: {appState.timer}</h1>
        <button className="todo-button" onClick={appState.resetTimer}>Reset clock</button>
      </div>
    )
  }
}

TodoListView.propTypes = {
  appState: PropTypes.object.isRequired
}

export default TodoListView;