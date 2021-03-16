import React from 'react';
import './App.css';
import About from './compenents/about/index';
import Nav from './compenents/nav/index'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;