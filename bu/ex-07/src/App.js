import React, {Component} from 'react';

import './css/local.css';

import {payeesDAO} from './data/class-data';

//import PayeeDetail from './payees/PayeeDetail';
import PayeeDetail from './payees/PayeeDetailClass';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const payee = payeesDAO.get(13);

    return (
      <section>
        <PayeeDetail payee={payee} />
      </section>
    );
  }
}