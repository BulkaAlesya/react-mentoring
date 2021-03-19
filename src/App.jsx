import './App.css';

import React from 'react';

import Header from './header/Header';
import Body from './body/BodyContainer';
import ErrorBoundary from './Common/ErrorHandler/ErrorBoundary'

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary >
        <Body />
      </ErrorBoundary>
    </div>
  );
}

export default App;
