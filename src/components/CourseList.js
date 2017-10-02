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
    let tabLinks = [];
    let contentRoutes = [];
    const sessionsList = this.state.sessions;

    /* TODO: this.state.sessions is the result from our promise, which access the API with sessions of course names and content.
    I want to use a map function to target all names and add them as Tab Bars, and all the subject lists as content. I'm
    almost doing it here but using a for loop is not optimal. Todo: Can I get help with a .map function to do what I'm trying?

    I'm aware that the list for tabs and list for content shouldn't be in the same function. Noproblem splitting them as I
    originally intended. This was just for the use with path names in react-router.
     */
    for (let i = 0; i < sessionsList.length; i++) {
      log("LOOP Session, ", sessionsList[i]);
      tabLinks.push(
        <Link to={"/courses/" + sessionsList[i].name} className="tab" key={i}>{sessionsList[i].name}</Link>
      )

      sessionsList.map(function (sessions) {
        contentRoutes.push(<Route path={"/courses/" + sessionsList[i].name} className="" key={i}
                                  component={() => <TabContent name={sessionsList[i].name} content={sessions['subjects']}/>}/>)
      });

    }
    return (
      <div>
        <div className="tabBar">
          {tabLinks}
        </div>
        <Switch>
          {contentRoutes}
        </Switch>
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
