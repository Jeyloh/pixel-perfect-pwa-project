import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';


const appState = observable({
  counter: 0,
  timer: 0
});
appState.resetTimer = action(function reset() {
  appState.timer = 0;
})

setInterval(action(function tick() {
  appState.timer += 1;
}), 1000)

@observer
class TodoListView extends Component {

  onReset () {
    this.props.appState.resetTimer();
  }

  renderTodos() {
    const todos = this.props.appState.todos;
    let temp = [];

    for (let i = 0; i < todos; i++) {
      temp.push(<h2>{i} item: { todos[i] }</h2>);
    }
    return <div>{todos}</div>
  }

  render() {
    return (
      <div className="content-wrapper">
        <h1>First item: {this.props.appState.todos[0]}</h1>
      </div>
    )
  }
}

TodoListView.propTypes = {
  appState: PropTypes.object.isRequired
}

export default TodoListView;