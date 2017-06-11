import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    window.setTimeout(() => this.setState({ counter: 100 }), 2000);
  }
  render() {
    const { counter } = this.state;
    return (
      <Counter
        increment={() => this.setState({ counter: counter + 1 })}
        value={counter === 0 ? 'zero' : counter.toString()}
      />
    );
  }
}
export default App;
