import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    status: 'login',
  };

  onLogin = () => {
    this.setState({
      status: 'spinner',
    });

    setTimeout(() => {
      this.setState({
        status: 'loguot',
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
        status: 'login',
      });
  }

  render() {
    if (this.state.status === 'login') {
      return <Login onLogin={this.onLogin} />;
    } else if (this.state.status === 'spinner') {
      return <Spinner size="40px" />;
    } else if (this.state.status === 'loguot') {
      return <Logout onLogout={this.onLogout} />;
    }
  }
}

export default Auth;
