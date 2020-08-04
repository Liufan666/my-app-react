import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './ReduxComponents/CounterGroup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup defaultvalue = {0}/>
      </header>
    </div>
  );
}

export default App;
