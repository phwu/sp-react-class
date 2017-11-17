import React, {Component} from 'react';

import {payeesDAO} from '../data/class-data';
import PayeeBrowser from './PayeeBrowser';
import PayeeList from './PayeeList';
import PayeeSearch from './PayeeSearch';

class PayeesContainer extends Component {
  constructor( props ) {
    super( props );

    this.views = {
      LIST  : 'list',
      DETAIL: 'detail',
        SEARCH : 'search'
    };

    this.state = {
      view     : this.views.LIST,
      payee    : null,
      payeeList: []
    };

    this.handleNextPrev = this.handleNextPrev.bind( this );
    this.handlePayeeSelect = this.handlePayeeSelect.bind( this );
    this.backToList = this.backToList.bind( this );
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
      //const payeelist = payeesDAO.list();
      fetch('http://localhost:8001/payees')
          .then( res => res.json()) //if( res.ok ) { return res.json()} else { return Promise.rejected
          .then( payees => this.setState({
              payeeList: payees,
              payee: payees[0]
          }))
          .catch( err => console.error('something went wrong: ', err) );
      /*this.setState({
          payeeList: payeelist,
          payee: payeelist[0]
      });*/
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

  handleSearch( searchText ) {
    const searchReg = new RegExp(searchText, 'i');
    let foundPayees = this.state.payeeList.filter( payee => searchReg.test(payee.payeeName) );
      if( searchText.length === 0 ) {
          foundPayees = payeesDAO.list();
      }
    this.setState( {
        payeeList: foundPayees,
        view: this.views.LIST
    });
  }

  backToList() {
    this.setState({ view: this.views.LIST });
  }

  render() {
    let view = (
        <section>
            <PayeeSearch onSearch={this.handleSearch} />
            <PayeeList payees={this.state.payeeList} onPayeeSelect={this.handlePayeeSelect}/>
        </section>
    );
    if( this.state.view === this.views.DETAIL ) {
      view = <PayeeBrowser onBack={this.backToList} onNextPrev={this.handleNextPrev} payee={this.state.payee}/>;
    }
    return <div>{view}</div>;
  }
}

export default PayeesContainer;
