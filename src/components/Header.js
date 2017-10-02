import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <Link to="/" className="back-button" />
        <div className="header-content">
          <h2>#LybeckDesign</h2>
        </div>
      </header>
    );
  }
}

export default Header;
