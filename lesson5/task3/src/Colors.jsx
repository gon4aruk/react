import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  changeColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          onClick={() => this.changeColor(RED)}
          style={{ backgroundColor: RED }}
        ></button>
        <button
          className="colors__button"
          onClick={() => this.changeColor(GREEN)}
          style={{ backgroundColor: GREEN }}
        ></button>
        <button
          className="colors__button"
          onClick={() => this.changeColor(BLUE)}
          style={{ backgroundColor: BLUE }}
        ></button>
      </div>
    );
  }
}

export default Colors;
