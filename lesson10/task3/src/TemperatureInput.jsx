import React from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
};

class TemperatureInput extends React.Component {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Введите градусы по шкале {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
