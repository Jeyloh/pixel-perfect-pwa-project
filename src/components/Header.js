import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { match, location, history } = this.props
    const title = location.pathname.replace("/", "").replace("-", " ");

    return (
      <header className="header-wrapper">
        <div className="header-content">
          <div className="header-nav">
            <a onClick={() => this.goBack()} className="back-button" />
            <h1 className="header-title">{ title }</h1>
          </div>
          <h2 className="lybeck-logo">#Lybeck<br />Design</h2>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
