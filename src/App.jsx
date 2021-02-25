import './App.css';
import React from 'react';
import FirstComponent from './first-component/first-component';
import SecondComponent from './second-component/second-component';
import ThirdComponent from './third-component/third-component';
import FourthComponent from './fourth-component/fourth-component';

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
