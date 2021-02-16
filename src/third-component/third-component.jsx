import React from 'react';
import './third-component.css';

export class ThirdComponent extends React.PureComponent {
  render() {
    return <div className="third">
      <span className="title">{this.props.title}</span>
    </div>;
  }
}
export default ThirdComponent;
