import React from 'react';
import { Link , Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react'
import _ from 'lodash';

import {Routine} from './Routine'


const log = (...args) => console.log('[Routines.Component]', ...args)

@observer
export class RoutineList extends React.Component {

  del = (id) => {
    this.props.routines.del(id)
  };

  render() {
    return (
      <div className="menu-container">
        {_.map(this.props.routines.json, (it, key) => (
          <Link to={"/routines/" + it.routine.name} onClick={ () => {console.log(it.routine.name)}}
                key={key}
                className="menu-button-main">
            {it.routine.name}
          </Link>
        ))}
        <Link to="/routines/add"
              className="menu-button-main">
          +
        </Link>
      </div>
    )
  }
}