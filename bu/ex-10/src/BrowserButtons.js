import React from 'react';

function BrowserButtons( { onNextPrev } ) {
    const handleClick = (event) => {
       onNextPrev( event.target.getAttribute('name') );
    };

  return (
      <div className="btn-group">
        <button name="previous"
                className="btn btn-default"
                onClick={handleClick} >
          &laquo; Prev
        </button>
        <button name="next"
                className="btn btn-default"
                onClick={handleClick} >
          Next &raquo;
        </button>
      </div>
  );
}

export default BrowserButtons;
