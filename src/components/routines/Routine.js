import React from 'react';
import { Link , Route, Switch } from 'react-router-dom';
import {routines } from '../../mobx/stores/routines.store'
import { observer } from 'mobx-react'
import _ from 'lodash';


const log = (...args) => console.log('[Routines.Component]', ...args)

export class Routine extends React.Component {

  del = (id) => {
    routines.del(id)
  };

  render() {
    return (
      <div className="menu-container">
        <h1>{this.props.routines.routine.name}</h1>
        <ul>
          {/*{_.map(this.props.routines.routine.exercises, (it, key) => (*/}
            {/*<li onClick={ () => {console.log(it.routine.name)}}*/}
                  {/*key={key} >*/}
              {/*{it.ex1}*/}
            {/*</li>*/}
          {/*))}*/}
          <li>{this.props.routines.routine.exercises.ex1}</li>
          <li>{this.props.routines.routine.exercises.ex2}</li>
          <li>{this.props.routines.routine.exercises.ex3}</li>
        </ul>

      </div>
    )
  }
}