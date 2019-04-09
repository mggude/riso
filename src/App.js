import React, { Component } from 'react';
import RISO from './RISO.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={RISO} className="App-logo" alt="logo" />
          <br></br>
          <a
            className="App-link"
            href="https://www.instagram.com/ridesocietypensacola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i> @ridesocietypensacola
          </a>
        </header>
      </div>
    );
  }
}

export default App;
