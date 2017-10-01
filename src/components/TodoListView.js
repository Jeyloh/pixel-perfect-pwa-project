import React, { Component, PropTypes } from 'react';
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

class TodoListView extends Component {

  onReset () {
    this.props.appState.resetTimer();
  }

  render() {
    return (
      <div>
        <button onClick={this.onReset.bind(this)}>
          Seonds passed: {this.props.appState.timer}
        </button>
      </div>
    )
  }
}

TodoListView.propTypes = {
  appState: PropTypes.object.isRequired
}

export default TodoListView;