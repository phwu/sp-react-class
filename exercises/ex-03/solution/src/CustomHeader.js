import React from 'react';

const CustomHeader = ( props ) => {
  return (
    <header class="page-header">
      <h1>Express Scripts Banking Services</h1>
      <div>Serving the Express Scripts community since {props.today}</div>
      <hr/>
    </header>
  );
}

export default CustomHeader;
