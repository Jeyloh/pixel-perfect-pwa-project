import React from 'react';
import {routines } from '../../mobx/stores/routines.store'
import _ from 'lodash';


const log = (...args) => console.log('[Routines.Component]', ...args)

export class CurrentWorkout extends React.Component {

  del = (id) => {
    routines.del(id)
  };

  renderWorkout = () => {
    let days = [];

    _.map(this.props.routines.json, (it) => {
      _.map(it.routine.days, (workout) => {
        _.map(workout, (exData, exName) => {
          days.push(
            <div className="exerciseContainer">
              <h4 key={exName}>{exName}</h4>
              {
                _.map(exData, (key, value) => (
                  <p style={{fontSize: 14}} key={key}>{ value.toUpperCase() + ": " + key }</p>
                ))
              }
            </div>

          )
        })
      })
    })
    return days;
  }

  render() {
    return (
      <div className="menu-container">
        <h1>{this.props.routines.routine.name}</h1>
        { this.renderWorkout()}
      </div>
    )
  }
}