import React from 'react';
import { autorun, observable } from 'mobx/lib/mobx'
import { observer, computed, autorun } from 'mobx-react';  // not work

class TodoStore {
  @observable todos = ['buy milk', 'buy eggs'];
  @observable filter = "";
}

const store = window.store = new TodoStore;

export default store;

autorun(() => {
  console.log(store.filter);
  console.log(store.todos[0]);
})

