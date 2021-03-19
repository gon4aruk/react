import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);

    console.log('constructor: good place to create state');

    this.state = {
      number: 21,
    };
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  changeNumber = () => {
    this.setState({
      number: 45,
    });
  };

  render() {
    console.log('return React element to build DOM');
    return (
      <>
        <div>{this.state.number}</div>
        <button onClick={this.changeNumber}>Change number</button>
      </>
    );
  }
}

export default Life;
