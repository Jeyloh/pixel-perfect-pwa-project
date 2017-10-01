import React from 'react';
import axios from 'axios';

export const axiosCourseData = function() {
  return axios.get('https://raw.githubusercontent.com/filinils/FrontEndSeries/master/testApp/course.json')
    .then(function(response) {
      console.log(response);
    })
    .then(() => {
      console.log("Chaining thens");
    })
    .catch((error) => {
      console.log("Houston, we have an error: ", error);
    })
    .complete(function() {
      console.log("Complete");
    })
}


const CourseDataService = (props) => {
  return (
    <div></div>
  );
}