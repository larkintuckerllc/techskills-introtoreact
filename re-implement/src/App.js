import React, { Component } from 'react';

class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  */
  render() {
    // const { counter } = this.state;
    return (
      <div>
        <div>0</div>
        <button>+</button>
        {/*
        <div>{counter}</div>
        <div>{counter === 0 ? 'zero' : counter.toString()}</div>
        */}
        {/*
        <button
          onClick={() => window.console.log('Clicked')}
        >+</button>
        */}
        {/*
        <button
          onClick={() => this.setState({ counter: counter + 1 })}
        >+</button>
        */}
      </div>
    );
  }
}

export default App;
