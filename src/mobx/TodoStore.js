import { autorun, observable, action } from 'mobx'
// import { observer } from 'mobx-react';  // not work

class TodoStore {
  @observable todos = ['buy milk', 'buy eggs'];
  @observable filter = "";

  add = action( (todo) => {
    this.todos.push(todo);
  })

  removeItem = action( (index) => {
    this.todos.slice(1, index);
    this.todos.pop();
  })
}



const store = window.store = new TodoStore;

export default store;

autorun(() => {
  console.log(store.filter);
  console.log(store.todos[0]);
})

