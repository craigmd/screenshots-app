import React from 'react';
import logo from './logo.svg';
import { PPTExportButton } from './PPTExportButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <PPTExportButton />
      </main>
    </div>
  );
}

export default App;
