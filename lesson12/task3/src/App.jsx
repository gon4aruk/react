import React, { Component } from 'react';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';

class Page extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="app">
        <OddNumbers number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <EvenNumbers number={this.state.number} />
        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}

export default Page;
