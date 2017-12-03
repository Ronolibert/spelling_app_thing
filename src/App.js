import React, { Component } from 'react';
import Cookies from 'cookies-js';
import logo from './logo.svg';
import './App.css';
import GoogleButton from './components/GoogleButton';

class App extends Component {
  logout = () => {
    document.cookie = `${encodeURIComponent(
      'spelly-token'
    )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    console.log('logged out son');
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleButton />
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default App;
