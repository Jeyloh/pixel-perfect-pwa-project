import React from 'react';
import PropTypes from 'prop-types';

const log = (...args) => console.log('[TabContent]', ...args)

class TabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: null
    }
    log(this.props.content);
    this.renderContent = this.renderContent.bind(this);
  }


  renderContent() {
    let temp = []
    for(let i=0; i < this.props.content.length; i++) {
      temp.push(<li className="courselist-item">{this.props.content[i].name}</li>)
    }
    return <span>{temp}</span>
  }
  render() {
    return(
      <div>
        <h1 className="tabcontent-header">{this.props.name}</h1>
        <ul className="tab-content">
          { this.renderContent() }
        </ul>
      </div>

    )
  }
}

TabContent.propTypes = {
  name: PropTypes.object,
  content: PropTypes.object
}

export default TabContent;
