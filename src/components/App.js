import React, { Component } from 'react';
import logo from './../logo.svg';
import '../styling/main.scss';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from 'react-spinkit';
import DevTools from 'mobx-react-devtools'
import AlertContainer from 'react-alert'
import { observer } from 'mobx-react'
import { Routines } from './routines/';
import Header from './Header';
import MainMenu from './MainMenu';
import CourseList from './CourseList';
import BlueMix from './BlueMix';

@observer // Makes the application an observer to MobX state @observables
class App extends Component {

  componentDidMount() {
    console.log(this.props.history);
  }
  showAlert = (msg, type) => {
    this.msg.show(msg, {
      time: 5000,
      type: type
    })
  }
  render() {
    const isLoading = false;
    return (
      <div>
        <Router>
          <div id="app-wrapper">
            <Header title="Tittel"/>
            <main className="content-wrapper">
              {isLoading ?
                <Spinner name="folding-cube" color="white" />
                :
                <Switch>
                  <Route exact path="/" component={MainMenu}/>
                  <Route path="/menu" component={MainMenu}/>
                  <Route path="/courses/" component={CourseList}/>
                  <Route path="/routines/" component={(props) => (<Routines {...props} />)}/>
                  <Route path="/routines/:routine?" component={(props) => (<Routines {...props} />)}/>
                  <Route path="/routines/add" component={(props) => (<Routines {...props} />)}/>
                  <Route path="/cutting-edge" component={() => (<BlueMix showAlert={this.showAlert}/> )}/>
                  <Route path="/archive" render={() => {
                    return <h1>Archive</h1>
                  }}/>
                  <Route path="/settings" render={() => {
                    return <h1>Settings</h1>
                  }}/>
                  <Route path="/profile" render={() => {
                    return <h1>User profile</h1>
                  }}/>
                  <Route path="/404" render={() => {
                    return (<img src={logo} className="App-logo" alt="logo"/>)
                  }}/>
                </Switch>
              }
            </main>

            <Navbar />
            <AlertContainer ref={a => this.msg = a} {...alertOptions} />

          </div>

        </Router>

        <DevTools />

      </div>
    );
  }
}

export default App;


const alertOptions = {
  offset: 40,
  position: 'bottom right',
  theme: 'dark',
  time: 0,
  transition: 'fade'
}