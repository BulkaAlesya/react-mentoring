import './App.css';
import FirstComponent from './first-component/first-component.jsx';
import SecondComponent from './second-component/second-component.jsx';
import ThirdComponent from './third-component/third-component.jsx';
import FourthComponent from './fourth-component/fourth-component.jsx';
import React from 'react';

function App() {
  return (
    <div>
      <FirstComponent title="Create with function" />
      <SecondComponent title="Create with  Component" />
      <ThirdComponent title="Create with PureComponent" />
      <FourthComponent />
    </div>
  );
}

export default App;
