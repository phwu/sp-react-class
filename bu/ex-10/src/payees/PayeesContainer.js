import React, {Component} from 'react';

import {payeesDAO} from '../data/class-data';
import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';

class PayeesContainer extends Component {
  constructor( props ) {
    super( props );

    this.payeeList = payeesDAO.list();

    this.state = {
      payee: this.payeeList[ 0 ]
    };

    this.handleNextPrev = this.handleNextPrev.bind( this );
  }

  handleNextPrev( direction ) {
    let pos = this.payeeList.indexOf( this.state.payee );
    let next = 0;

    if ( direction === 'next' ) {
      next = Math.min( pos + 1, this.payeeList.length - 1 );
    } else {
      next = Math.max( pos - 1, 0 );
    }

    this.setState( {
      payee: this.payeeList[ next ]
    } );
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <PayeeDetail payee={this.state.payee} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <BrowserButtons onNextPrev={ this.handleNextPrev } />
          </div>
        </div>
      </section>
    );
  }
}

export default PayeesContainer;
