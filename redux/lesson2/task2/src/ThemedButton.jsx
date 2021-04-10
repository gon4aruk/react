import React, { Component } from 'react';
import { ThemeContext } from './theme-context.js';

class ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        className="btn"
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
