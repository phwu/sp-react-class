import React, {Component} from 'react';
import _sortBy from 'lodash/sortBy';

import {payeesDAO} from '../../data/class-data';
import PayeeList from './PayeeList';
import PayeeBrowser from './PayeeBrowser';

class PayeesContainer extends Component {
  constructor( props ) {
    super( props );

    this.views = {
      LIST  : 'list',
      DETAIL: 'detail'
    };

    this.state = {
      view     : this.views.LIST,
      payee    : null,
      payeeList: payeesDAO.list(),
      sortField: ''
    };

    this.handlePayeeSelect = this.handlePayeeSelect.bind( this );
    this.handleSort = this.handleSort.bind( this );
    this.backToList = this.backToList.bind( this );
    this.switchView = this.switchView.bind( this );
    this.handleNextPrev = this.handleNextPrev.bind( this );
  }

  handlePayeeSelect( payee ) {
    console.log( 'PayeesContainer.handlePayeeSelect received ', payee );
    this.setState( {
      view : 'detail',
      payee: payee
    } );
  }

  backToList() {
    this.setState( { view: this.views.LIST } );
  }

  switchView( viewName ) {
    this.setState( {
      view: viewName
    } );
  }

  handleNextPrev( payee, direction ) {
    let pos = this.state.payeeList.indexOf( payee );
    let next;

    if ( direction === 'next' ) {
      next = Math.min( pos + 1, this.state.payeeList.length - 1 );
    } else {
      next = Math.max( pos - 1, 0 );
    }

    this.setState( {
      payee: payeesDAO.get( this.state.payeeList[ next ].id )
    } );
  }

  handleSort( sortField ) {
    console.log( 'PayeeListContainer will sort on ', sortField );
    if ( this.state.sortField === sortField ) {
      this.setState( {
        sortField: sortField,
        payeeList: this.state.payeeList.reverse()
      } );
    } else {
      this.setState( {
        sortField: sortField,
        payeeList: _sortBy( this.state.payeeList, [ sortField ] )
      } );
    }
  }

  render() {
    let view = ( <PayeeList payees={this.state.payeeList}
                            onPayeeSelect={this.handlePayeeSelect}
                            onListSort={this.handleSort}/> );
    if ( this.state.view === this.views.DETAIL ) {
      view = (
        <PayeeBrowser payee={this.state.payee}
                      onNextPrev={this.handleNextPrev}
                      onBack={this.backToList}/>
      );

    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default PayeesContainer;
