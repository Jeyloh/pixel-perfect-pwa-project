import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AlertContainer from 'react-alert'


class BlueMix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      english: "en",
      spanish: "es"
    }
  }

  componentDidMount() {
    this.showAlert("This feature is not available yet", "error");
  }

  showAlert = (msg, type) => {
    this.msg.show(msg, {
      time: 5000,
      type: type
    })
  }

  translateEnEs = (event) => {
    let inputText = event.target.value;
    const username = 'a6479eb7-f1c1-461a-8fef-6b9de76c973c';
    const password = 'hoDJatPTxuvF';

    return axios({
      method: "GET",
      url: "https://gateway.watsonplatform.net/language-translator/api/v2/translate?source=en&target=es&text="+inputText,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": username + ':' + password
      },
    }).then((response) => {
      console.log(response.data);
      this.setState({spanish: response.data});
    }).catch( () => {
      this.setState({spanish: "Service error"});
    });

  }

  render() {
    return (
      <div className="content-wrapper">
        <input onChange={this.translateEnEs} name="english" />
        <h2>{this.state.spanish}</h2>
        <AlertContainer ref={a => this.msg = a} {...alertOptions} />

      </div>
    );
  }
}

BlueMix.propTypes = {};
BlueMix.defaultProps = {};

export default BlueMix;

const alertOptions = {
  offset: 80,
  position: 'bottom right',
  theme: 'dark',
  time: 0,
  transition: 'fade'
}