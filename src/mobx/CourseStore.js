import { autorun, observable, observer } from 'mobx'
import {fromPromise} from 'mobx-utils'

import _ from 'lodash';

import { axiosCourseData } from './../services/courseData.js'

const courseObject = axiosCourseData();

const myComponent = observer(({ fetchResult }) => {
  switch(fetchResult.state) {
    case "pending": return <div>Loading...</div>
    case "rejected": return <div>Ooops... {fetchResult.value}</div>
    case "fulfilled": return <div>Gotcha: {fetchResult.value}</div>
  }
})

class CourseStore {
  @observable loadingState = courseObject.state; // pending, rejected, fulfilled
  @observable sName = null;
  @observable sSubject = null;

  constructor() {
    this.sName = courseObject['sessions']['name'];
    this.sSubject =  courseObject['sessions']['subject'];
  }

}

const store = window.store = new CourseStore;

export default store;

autorun(() => {
  console.log(store.filter);
  console.log(store.todos[0]);
})

