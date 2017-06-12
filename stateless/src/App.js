import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <Counter />
      {/*
      <Counter
        increment={() => this.setState({ counter: counter + 1 })}
        value={counter === 0 ? 'zero' : counter.toString()}
      />
      */}
    );
  }
}
export default App;
