import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-wrapper">
          <Link to="/" className="nav-button"><img alt="nav" src='./../resources/svg-single/005__plus.svg'/>1</Link>
          <Link to="/" className="nav-button"><img alt="nav" src='./../resources/svg-single/005__plus.svg'/>2</Link>
          <Link to="/" className="nav-button"><img alt="nav" src='./../resources/svg-single/005__plus.svg'/>3</Link>
          <Link to="/" className="nav-button"><img alt="nav" src='./../resources/svg-single/005__plus.svg'/>4</Link>
      </nav>

    );
  }
}

export default Navbar;
