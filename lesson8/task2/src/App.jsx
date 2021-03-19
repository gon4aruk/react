import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  state = {
    status: true,
  };

  clearClocks = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    return (
      <>
        {this.state.status && (
          <>
            <Clock location="New York" offset={-4} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="London" offset={0} />
          </>
        )}
        <button onClick={this.clearClocks}>Toggle</button>
      </>
    );
  }
}

export default App;
