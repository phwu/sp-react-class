import React from 'react';

export default class PayeeDetailClass extends React.Component {
    constructor(props) {
        super(props);

        this.numberOfClicks = 0;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.numberOfClicks += 1;
        console.log("Clicked ", this.numberOfClicks);
        console.log(e.target);
        console.log(e.currentTarget);
    };

    render() {
        let payee = this.props.payee;

        return (
            <div onClick={ this.handleClick } className="panel panel-primary">
                <div className="panel-heading">{payee.payeeName}</div>
                <ul className="list-group">
                    <li className="list-group-item">{payee.payeeName}</li>
                    <li className="list-group-item">{payee.address}</li>
                    <li className="list-group-item">{payee.city}, {payee.state}</li>
                </ul>
            </div>
        );
    };
};