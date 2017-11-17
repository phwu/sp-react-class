import React from 'react';

export default ({payee, onPayeeSelect}) => {
    const handleClick = (e) => {
        onPayeeSelect(e.currentTarget.getAttribute('data-payee-id'));
    };

    // or you can use anon function to pass in payee directly since this view will get rerendered 
    return (
        <tr className="clickable" onClick={handleClick} data-payee-id={payee.id}>
            <td>{payee.payeeName}</td>
            <td>{payee.city}</td>
            <td>{payee.state}</td>
        </tr>
    );
};