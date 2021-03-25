import React, { Component } from 'react';
import Expand from './Expand';

class Page extends Component {
  state = {
    isOpen: false,
  };

  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title="Reccomended"
          isOpen={this.state.isOpen}
          onShow={this.showContent}
          onHide={this.hideContent}
        >
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
