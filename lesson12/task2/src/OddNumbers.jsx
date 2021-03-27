import React, { Component } from 'react';

class OddNumbers extends Component {
  shouldComponentUpdate() {
    if (this.props.number % 2 === 1) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">Odd number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default OddNumbers;
