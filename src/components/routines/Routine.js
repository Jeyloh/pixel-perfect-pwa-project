import React from 'react';
import { Link } from 'react-router-dom';
import {routines } from '../../mobx/stores/routines.store'
import _ from 'lodash';


const log = (...args) => console.log('[Routines.Component]', ...args)

export class Routine extends React.Component {

  del = (id) => {
    routines.del(id)
  };

  renderRoutineDays = () => {
    let days = [];

    _.map(this.props.routines.json, (it) => {
      _.map(it.routine.days, (day, key) => {
        days.push(
          <Link to={`/routines/${it.routine.name}/` + key}
                key={key}
                className="menu-button-main">{key}
          </Link>
        )
      })
    })
    return days;
  }

  render() {
    return (
      <div className="menu-container">
        <h1>{this.props.routines.routine.name}</h1>
        { this.renderRoutineDays()}
      </div>
    )
  }
}