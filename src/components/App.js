import React, { Component } from 'react';
import logo from './../logo.svg';
import '../App.scss';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DevTools from 'mobx-react-devtools'


import TodoListView from './TodoListView';
import store from './../mobx/TodoStore';
import Header from './Header';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import AnotherComponent from './AnotherComponent';

class App extends Component {
  render() {
    return (
      <div className="app-background gradient-background">
        <Router>
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={MainMenu} />
              <Route path="/1" component={AnotherComponent} />
              <Route path="/12" component={() => (<TodoListView appState={store}/>)} />
              <Route path="/123" component={MainMenu} />
              <Route path="/1234" render = {function() {
                return (<div className="content-wrapper"><img src={logo} className="App-logo" alt="logo" /></div>)
              }} />
            </Switch>
          </div>

        </Router>
        <DevTools />

      </div>
    );
  }
}

export default App;
