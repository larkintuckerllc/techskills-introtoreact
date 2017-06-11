import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      /*
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
      React.createElement(
        'div',
        { className: 'App' },
        React.createElement(
          'div',
          { className: 'App-header' },
          React.createElement(
            'img',
            {
              src: logo,
              className: 'App-logo',
              alt: 'logo'
            },
            null
          ),
          React.createElement(
            'h2',
            null,
            'Welcome to React'
          )
        ),
        React.createElement(
          'p',
          { className: 'App-intro' },
          'To get started, edit ',
          React.createElement(
            'code',
            null,
            'src/App.js'
          ),
          ' and save to reload.'
        )
      )
    );
  }
}

export default App;
