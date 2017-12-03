import React from 'react';
import { Link , Route, Switch } from 'react-router-dom';
import {routines, routine } from '../../mobx/stores/routines.store'
import { observer } from 'mobx-react'
import {RoutinesList} from './RoutineList'
import {Routine} from './Routine'
import {NewRoutine} from './NewRoutine'
import {RoutineList} from './RoutineList'


const log = (...args) => console.log('[Routines.Component]', ...args)

@observer
export class Routines extends React.Component {


  del = (id) => {
    routines.del(id)
  };

  render() {

    const routine = this.props.match.params;

    return (
      <Switch>
        <Route exact path="/routines/" component={(props) => (<RoutineList {...props} routines={routines} />) }/>
        <Route path="/routines/add" component={(props) => (<NewRoutine {...props} routines={routines}/>) }/>
        <Route path="/routines/:routine" component={(props) => (<Routine {...props} routines={routines} />) }/>
      </Switch>
    )




  }
}