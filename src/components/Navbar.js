import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Link } from 'react-router-dom';
import gym from './../resources/icons-svg/025-gym.svg';
import archive from './../resources/icons-svg/011-folder-1.svg';
import settings from './../resources/icons-svg/009-interface.svg';
import user from './../resources/icons-svg/021-user.svg';
import basketball from './../resources/icons-svg/028-ball-of-basketball.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-wrapper">
        <Link to="/" className="nav-button" style={{background: "url("+gym+") no-repeat center", backgroundSize: "30%"}} />
        <Link to="/" className="nav-button" style={{background: "url("+archive+") no-repeat center", backgroundSize: "20%"}} />
        <Link to="/" className="nav-button" style={{background: "url("+basketball+") no-repeat center", backgroundSize: "50%"}} />
        <Link to="/" className="nav-button" style={{background: "url("+settings+") no-repeat center", backgroundSize: "20%"}} />
        <Link to="/" className="nav-button" style={{background: "url("+user+") no-repeat center", backgroundSize: "20%"}} />
      </nav>
    );
  }
}

export default Navbar;
