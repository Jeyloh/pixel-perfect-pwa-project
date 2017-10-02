import axios from 'axios';

export const getSessions = function() {
  return axios.get('https://raw.githubusercontent.com/filinils/FrontEndSeries/master/testApp/course.json/sessions')
    .then( (response) => {
      const sessions = response.data.sessions;
      console.log(sessions);
      return sessions;
    }).catch( (error) => {
      console.log(error)
    })
}
export const axiosCourseData = function() {
  return axios.get('https://raw.githubusercontent.com/filinils/FrontEndSeries/master/testApp/course.json')
}
