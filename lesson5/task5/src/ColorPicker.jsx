import React from 'react';

class ColorPicker extends React.Component {
  constructor() {
    super();

    this.state = {
      color: '',
    };
  }

  showColor = color => {
    this.setState({
      color: color,
    });
  };

  removeColor = () => {
    this.setState({
      color: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.showColor('Coral')}
            onMouseLeave={this.removeColor}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.showColor('Aqua')}
            onMouseLeave={this.removeColor}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.showColor('Bisque')}
            onMouseLeave={this.removeColor}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
