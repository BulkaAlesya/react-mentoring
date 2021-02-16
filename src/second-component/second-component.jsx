import React from 'react';
import './second-component.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class SecondComponent extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="second">
        <span className="title">{title}</span>
      </div>
    );
  }
}

SecondComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SecondComponent;
