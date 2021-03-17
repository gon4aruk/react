import React from 'react';

class Toggler extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Off',
    };
  }

  toggleButton = () => {
    this.setState({
      value: this.state.value === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggleButton}>
        {this.state.value}
      </button>
    );
  }
}

export default Toggler;
