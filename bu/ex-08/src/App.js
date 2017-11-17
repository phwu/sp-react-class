import React, {Component} from 'react';

import './css/local.css';

import {payeesDAO} from './data/class-data';
import PayeeDetail from './payees/PayeeDetail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       payee: payeesDAO.get(23)
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

    handlePrevious() {
      let payee = this.state.payee;
      payee = payeesDAO.get(parseInt(payee.id) - 1);

      if( payee != null && payee.payeeName != '' ) {
          this.setState({payee: payee});
      }
    };

    handleNext() {
        let payee = this.state.payee;
        payee = payeesDAO.get(parseInt(payee.id) + 1);

        if( payee != null && payee.payeeName != '' ) {
            this.setState({payee: payee});
        }
    };

  render() {
    return (
      <section>
        <PayeeDetail payee={this.state.payee}/>
        <div className="text-center">
          <div className="btn-group">
            <button onClick={this.handlePrevious} className="btn btn-default">{ `< Prev` }</button>
            <button onClick={this.handleNext} className="btn btn-default">{ `Next >` }</button>
          </div>
        </div>
      </section>
    );
  }
}