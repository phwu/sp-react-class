import React from 'react';

export default ( { payee } ) => {
    const handleClick = () => {
        console.log("Clicked");
    };

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">{payee.payeeName}</div>
            <ul className="list-group">
                <li onClick={handleClick} className="list-group-item">{payee.payeeName}</li>
                <li className="list-group-item">{payee.address}</li>
                <li className="list-group-item">{payee.city}, {payee.state}</li>
            </ul>
        </div>
    );
};