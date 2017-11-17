import React, {Component} from 'react';
import {payeesDAO} from '../data/class-data';

class PayeeDetail extends Component {
  constructor( props ) {
    super( props );

    this.payeesList = payeesDAO.list();
    const currentPayee = this.payeesList.find( payee => payee.id === props.payee.id );
    this.state = {
        payee: this.payeesList.indexOf(currentPayee) /*this.props.payee*/
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handlePrevious( e ) {
    /*let payee = this.state.payee;
    payee = payeesDAO.get(parseInt(payee.id) - 1);
    if( payee != null && payee.payeeName != '' ) {
        this.setState({payee: payee});
    }*/
    let payee = this.state.payee;
    if( payee > 0 ) {
        payee--;
        this.setState({payee: payee});
    }
  }

  handleNext( e ) {
    console.log( 'You clicked on the %s button.', e.target.name );

      /*let payee = this.state.payee;
      payee = payeesDAO.get(parseInt(payee.id) + 1);
      if(payee != null && payee.payeeName ) {
          this.setState({payee: payee});
      }*/
      let payee = this.state.payee;
      if( payee < this.payeesList.length-1 ) {
          payee++;
          this.setState({payee : payee });
      }
  }

  render() {
      const payee = this.payeesList[this.state.payee];
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">{payee.payeeName}</div>
          <ul className="list-group">
            <li className="list-group-item">{payee.payeeName}</li>
            <li className="list-group-item">{payee.address}</li>
            <li className="list-group-item">{payee.city}, {payee.state} {payee.zip}</li>
              <li className="list-group-item">{payee.category.categoryName}</li>
          </ul>
        </div>
        <div className="text-center">
          <div className="btn-group">
            <button onClick={this.handlePrevious}
                    name="previous"
                    className="btn btn-default">
              &laquo; Prev
            </button>
            <button onClick={this.handleNext}
                    name="next"
                    className="btn btn-default">
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );

  }
}
;

export default PayeeDetail;