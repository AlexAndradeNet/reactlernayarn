import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { printTest } from "common";
import { TextBox } from "common";
import { TextSample } from "common";

function App() {
  printTest();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TextBox />
        <TextSample />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
