import React, { Component } from 'react';
import RISO from './RISO.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <a
            className="App-link"
            href="https://www.instagram.com/ridesocietypensacola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={RISO} className="logo" alt="logo" />
          </a>
          
        {/* </header> */}
      </div>
    );
  }
}

export default App;
