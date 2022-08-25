import React from 'react';
import '../css/clear-button.css';

const ClearButton = (props) => (
  <div className='clear-button' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default ClearButton;