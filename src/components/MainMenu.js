import React from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {
  render() {
    return(
      <div >
        <div className="content-wrapper">
          <h1>Main menu</h1>
          <Link to="/courses/" className="menu-button-main">Course List</Link>
          <Link to="/12" className="menu-button-main">MobX demo</Link>
          <Link to="/123" className="menu-button-main">Main Menu</Link>
          <Link to="/1234" className="menu-button-main">BlueMix demo</Link>
        </div>
      </div>
    )
  }
}


export default MainMenu;
