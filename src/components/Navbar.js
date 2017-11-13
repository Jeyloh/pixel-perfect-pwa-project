import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-content">
          <Link to="/routines" className="nav-button gym" />
          <Link to="/archive" className="nav-button archive" />
          <Link to="/menu" className="nav-button basketball" />
          <Link to="/settings" className="nav-button settings" />
          <Link to="/profile" className="nav-button user" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
