import { observable, computed } from 'mobx'
import { fb } from '../../firebase/index'
import { map, toJS } from 'mobx'

class Routines {
  @observable routines = map({});
  @observable routine = {
    name: "Upper Lower",
    exercises: {
      ex1: "Squat 5x5",
      ex2: "Benchpress 5x5",
      ex3: "Deadlift 5x5",
    }
  }

  constructor() {
    fb.routines.on('value' , (snapshot) => {
      this.routines = snapshot.val();
    });

  }

  @computed get json() {
    return toJS(this.routines);
  };
  @computed get jsonRoutine() {
    return toJS(this.routine);
  };

  add = (routine) => {
    const id = fb.routines.push().key;
    this.update(id, routine);
  };


  update = (id, routine) => {
    fb.routines.update({ [id]: {routine}});
  };

  del = (id) => {
    fb.routines.child(id).remove();
  };
}

const routines = new Routines();
export { routines };