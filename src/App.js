import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CounterGroup from './Components/CounterGroup';

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
