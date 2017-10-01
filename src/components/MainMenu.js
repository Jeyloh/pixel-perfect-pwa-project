import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class MainMenu extends React.Component {
  render() {
    return(
      <div >
        <div className="content-wrapper">
          <h1>Main menu</h1>
          <Link to="/1" className="menu-button-main">1</Link>
          <Link to="/12" className="menu-button-main">2</Link>
          <Link to="/123" className="menu-button-main">3</Link>
          <Link to="/1234" className="menu-button-main">4</Link>
        </div>
        <Navbar />
      </div>
    )
  }
}

MainMenu.propTypes = {
};

export default MainMenu;
