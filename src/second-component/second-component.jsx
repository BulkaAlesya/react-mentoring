import React from 'react';
import './second-component.css';

class SecondComponent extends React.Component {
  render() {
    return <div className="second">
      <span className="title">{ this.props.title }</span>
    </div>;
  }
}

export default SecondComponent;
