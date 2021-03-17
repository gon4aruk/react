import React from 'react';

class Toggler extends React.Component {
  toggle = event => {
    event.target.textContent = event.target.textContent === 'Off' ? 'On' : 'Off';
  };

  render() {
    return (
      <div className="toggler" onClick={this.toggle}>
        Off
      </div>
    );
  }
}

export default Toggler;
