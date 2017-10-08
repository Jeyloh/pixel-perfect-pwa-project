import React, { Component } from 'react';
import logo from './../logo.svg';
import '../App.scss';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DevTools from 'mobx-react-devtools'

import TodoListView from './TodoListView';
import store from './../mobx/TodoStore';
import Header from './Header';
import MainMenu from './MainMenu';
import CourseList from './CourseList';
import BlueMix from './BlueMix';

class App extends Component {
  render() {
    return (
      <div className="app-background">
        <Router>
          <div className="app-wrapper">
            <Header />
            <Switch>
              <Route exact path="/" component={MainMenu} />
              <Route path="/courses/" component={CourseList} />
              <Route path="/12" component={() => (<TodoListView appState={store}/>)} />
              <Route path="/123" component={BlueMix} />
              <Route path="/1234" render = {function() {
                return (<div className="content-wrapper"><img src={logo} className="App-logo" alt="logo" /></div>)
              }} />
            </Switch>
            <Navbar />

          </div>

        </Router>

        <DevTools />

      </div>
    );
  }
}

export default App;
