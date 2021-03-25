import React, { Component } from 'react';
import Expand from './Expand';

class Page extends Component {
  state = {
    isOpen: false,
  };

  toggleButton = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand title="Some title" isOpen={this.state.isOpen} onToggle={this.toggleButton}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default Page;
