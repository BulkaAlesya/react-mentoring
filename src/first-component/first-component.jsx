import './first-component.css';
import React from 'react';

function FirstComponent(props) {
  return (
    <div className="first">
      <span className="title">
        {props.title}
      </span>
    </div>
  );
}

export default FirstComponent;
