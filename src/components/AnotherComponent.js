import React from 'react';
import PropTypes from 'prop-types';
import { axiosCourseData } from './../services/courseData.js'

const log = (...args) => console.log('[AnotherComponent]', ...args)

class AnotherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    log("Constructor");
  }

  componentWillUpdate() {log("Component Should Update");}
  componentDidUpdate() {log("Component Did Update");}
  componentWillUnmount() {log("Component Will Unmount")}
  componentWillMount() {log("Component Will Mount");}
  componentWillReceiveProps() {log("Component Will Receive Props");}
  componentDidMount() {
    log("Component Did Mount");
    axiosCourseData();
  }

  render() {
    log("Render");
    return(
      <div className="content-wrapper">
        <p>Another one </p>

      </div>
    )
  }
}


export default AnotherComponent;
