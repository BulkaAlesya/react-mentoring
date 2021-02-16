import React from 'react';
import './fourth-component.css';

const fourthComponent = React.createElement(
  'div',
  { className: 'fourth'},
  React.createElement('span', { className: 'title' }, 'Create with createComponent'),
);

class FourthComponent extends React.Component {
  render() {
    return fourthComponent;
  }
}
export default FourthComponent;
