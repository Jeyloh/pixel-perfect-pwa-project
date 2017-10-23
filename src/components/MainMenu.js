import React from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {
  render() {
    return(
      <div className="menu-container">
        <h1>Main menu</h1>
        <Link to="/courses/" className="menu-button-main">Course List</Link>
        <Link to="/todo" className="menu-button-main">MobX demo</Link>
        <Link to="/cutting-edge" className="menu-button-main">Bluemix Translator</Link>
        <Link to="/404" className="menu-button-main">BlueMix demo</Link>
      </div>
    )
  }
}


export default MainMenu;
