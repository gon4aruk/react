import React, { Component } from 'react';
import Spinner from './Spinner';

export const withDataLoader = userUrl => CurrentComponent => {
  class WithDataLoader extends Component {
    state = {
      data: null,
    };

    fetchUser = url =>
      fetch(url)
        .then(response => response.json())
        .then(userData => {
          this.setState({ data: userData });
        });

    componentDidMount() {
      this.fetchUser(userUrl);
    }

    render() {
      if (!this.state.data) {
        return <Spinner />;
      }
      return <CurrentComponent data={this.state.data} />;
    }
  }

  return WithDataLoader;
};
