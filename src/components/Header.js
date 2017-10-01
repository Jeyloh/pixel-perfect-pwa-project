import React, { Component } from 'react';
import back from './../resources/svg-single/001__arrow_left.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/" className="back-button"></Link>
          <div className="header-content">
            <h2>#LybeckDesign</h2>
          </div>
        </header>
      </div>

    );
  }
}

export default Header;
