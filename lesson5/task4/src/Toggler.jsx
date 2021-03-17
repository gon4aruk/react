import React from 'react';

class Toggler extends React.Component {
  toggleButton = event => {
    event.target.textContent = event.target.textContent === 'Off' ? 'On' : 'Off';
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggleButton}>
        Off
      </button>
    );
  }
}

export default Toggler;
