import React, {Component} from 'react';

import {payeesDAO} from '../data/class-data';
import PayeeBrowser from './PayeeBrowser';
import PayeeList from './PayeeList';

class PayeesContainer extends Component {
  constructor( props ) {
    super( props );

    this.payeeList = payeesDAO.list();

    this.views = {
      LIST  : 'list',
      DETAIL: 'detail'
    };

    this.state = {
      view     : this.views.LIST,
      payee    : this.payeeList[ 0 ],
      payeeList: payeesDAO.list()
    };

    this.handleNextPrev = this.handleNextPrev.bind( this );
    this.handlePayeeSelect = this.handlePayeeSelect.bind( this );
    this.backToList = this.backToList.bind( this );
  }

  handleNextPrev( direction ) {
    let pos = this.payeeList.indexOf( this.state.payee );
    let next = 0;

    if ( direction === 'next' ) {
      next = Math.min( pos + 1, this.payeeList.length - 1 );
    } else {
      next = Math.max( pos - 1, 0 );
    }

    let nextPayee = this.payeeList[ next ];

    this.setState( {
      payee: nextPayee
    } );
  }

  handlePayeeSelect( selectedId ) {
    this.setState({ payee: this.payeeList[selectedId-1], view: this.views.DETAIL });
  }

  backToList() {
    this.setState({ view: this.views.LIST });
  }

  render() {
    let view = <PayeeList payees={this.state.payeeList} onPayeeSelect={this.handlePayeeSelect}/>;
    if( this.state.view === this.views.DETAIL ) {
      view = <PayeeBrowser onBack={this.backToList} onNextPrev={this.handleNextPrev} payee={this.state.payee}/>;
    }
    return <div>{view}</div>;
  }
}

export default PayeesContainer;
