import React from 'react';
import { Link } from 'react-router-dom';
import {routines } from '../../mobx/stores/routines.store'
import _ from 'lodash';
import { observer } from 'mobx-react'


@observer
export class NewRoutine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      routine: {}
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
    console.log(name, value);
  }

  addRoutine = (e) => {
    e.preventDefault();
    const routine = {...this.state}
    console.log(routine);
    this.props.routines.add(routine)
    this.props.history.goBack();
  }

  render () {
    return (
      <div className="menu-container">
        <form className="routine-container" onSubmit={(e) => this.addRoutine(e)}>
          <h1>Add new routine</h1>
          <input onChange={(e) => this.handleChange(e) } name="name" className="sa-input" placeholder="Routine Name" />
          <input onChange={(e) => this.handleChange(e) } name="ex1" className="sa-input" placeholder="Exercise 1" />
          <input onChange={(e) => this.handleChange(e) } name="ex2" className="sa-input" placeholder="Exercise 2" />
          <input onChange={(e) => this.handleChange(e) } name="ex3" className="sa-input" placeholder="Exercise 3" />
          <button type="submit" className="sa-input"> Add to your routines </button>
        </form>
      </div>
    )
  }
}