import React from 'react';

const Header = (props) => {
    return (
        <div>
        <h1>Express Scripts Banking Services</h1>
        <p>Serving the Express Scripts community since {props.today}</p>
        </div>
    );
};

export default Header;