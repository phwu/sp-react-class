import React from 'react';

const Footer = (props) => {
    return (
        <div>
        <p>Copyright &copy; {new Date().getFullYear()} {props.company.name}</p>
            <address>
        {props.company.address} <br/>
            {props.company.city}, {props.company.state}<br/>
            {props.company.zip}
            </address>
        </div>
    );
};

export default Footer;