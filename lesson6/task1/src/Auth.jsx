import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    login: false,
  };

  handleLogin = () => {
    this.setState({
      login: true,
    });
  };

  handleLogout = () => {
    this.setState({
      login: false,
    });
  };

  render() {
    const button = this.state.login ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.login} />
        {button}
      </div>
    );
  }
}

export default Auth;
