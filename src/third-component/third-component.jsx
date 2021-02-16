import React from 'react';
import './third-component.css';
import PropTypes from 'prop-types';

class ThirdComponent extends React.PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className="third">
        <span className="title">{title}</span>
      </div>
    );
  }
}

ThirdComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ThirdComponent;
