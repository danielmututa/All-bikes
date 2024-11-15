import React from 'react';


function Popup({ show, message }) {
  return (
    <div id="popup" className={show ? 'show' : ''}>
      {message}
    </div>
  );
}

export default Popup;