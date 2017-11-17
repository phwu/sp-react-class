import React from 'react';
import PayeeRow from './PayeeRow';

export default ({payees, onPayeeSelect}) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {
                payees.map(payee => <PayeeRow onPayeeSelect={onPayeeSelect} key={payee.id} payee={payee}/> )
            }
            </tbody>
        </table>
    );
};