import './first-component.css';
import React from 'react';
import PropTypes from 'prop-types';

function FirstComponent(props) {
  const { title } = props;
  return (
    <div className="first">
      <span className="title">
        {title}
      </span>
    </div>
  );
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FirstComponent;
