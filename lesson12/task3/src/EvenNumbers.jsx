import React, { Component } from 'react';

class EvenNumbers extends Component {
  shouldComponentUpdate() {
    if (this.props.number % 2 === 0) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">Even number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default EvenNumbers;
