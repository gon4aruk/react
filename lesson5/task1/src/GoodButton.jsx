import React from 'react';

class GoodButton extends React.Component {
  handleButton(e) {
    alert(e.target.textContent);
  }
  
  render() {
    return (
      <button className="fancy-button" onClick={this.handleButton}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
