import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {store} from './mobx/stores';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();


if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;

    ReactDOM.render (
      <NextApp />, document.getElementById('root')
    );
  });
}