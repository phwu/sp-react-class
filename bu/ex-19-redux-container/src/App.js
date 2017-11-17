import React, {Component} from 'react';
import {createStore} from 'redux';
import payee from './payees/payee-reducers';
import {Provider} from 'react-redux';

import './css/local.css';

import PayeesContainerRedux from './payees/PayeesContainerRedux';

const store = createStore(payee);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PayeesContainerRedux/>
      </Provider>
    );
  }
}