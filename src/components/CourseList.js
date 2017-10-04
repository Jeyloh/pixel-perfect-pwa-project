import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import TabContent from './TabContent';
import { axiosCourseData } from './../services/courseData.js'
import _ from 'lodash';
const log = (...args) => console.log('[CourseList]', ...args)

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
      tabBar: [],
      tabContent: [],
      sessions: []
    }
    this.renderCourseView = this.renderCourseView.bind(this);
  }

  componentDidMount() {
    log("Component Did Mount");
    log(axiosCourseData.resolve);
    let self = this;
    axiosCourseData()
      .then(function(response) {
        let sessions = response.data['sessions'];
        log(sessions);
        const mappedNames = _.mapValues(sessions, 'name');
        log("mappedNames = ", mappedNames);
        self.setState({
          tabBar: mappedNames,
          sessions: sessions
        })
      })
      .catch((error) => {
        console.log("Houston, we have an error: ", error);
      })
  }

  renderCourseView() {
    let tabLinks;
    const sessionsList = this.state.sessions;

    tabLinks = sessionsList.map((session, i) => {
      return <Link to={"/courses/" + session.name} className="tab" key={i}>{session.name}</Link>
    });
    return (
      <div>
        <div className="tabBar">
          {tabLinks}
        </div>
        <Route path="/courses/:course" render={(e) => {
          let session = sessionsList.filter((obj) => {
            return obj.name === e.match.params.course
          });
          return <TabContent name={session[0].name} content={session[0].subjects} />
        }}/>
      </div>


    )
  }

  render() {

    log("Render");
    return(
      <div className="content-wrapper">
        <h1>Course List</h1>
        { this.state.sessions.length >= 1 ?
          this.renderCourseView()
          :
          <span>Ops, couldn't connect to server... check out <a href="https://raw.githubusercontent.com/filinils/FrontEndSeries/master/testApp/course.json">
            the API endpoint</a> to see what's wrong</span>
        }
      </div>
    )
  }
}


export default CourseList;
