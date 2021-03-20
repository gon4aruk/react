import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.updateStatusOffline);
    window.addEventListener('offline', this.updateStatusOnline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateStatusOffline);
    window.removeEventListener('offline', this.updateStatusOnline);
  }

  updateStatusOnline = () => {
    this.setState({
      status: 'offline',
    });
  };

  updateStatusOffline = () => {
    this.setState({
      status: 'online',
    });
  };

  render() {
    const isOnline = this.state.status === 'online' ? true : false;

    if (isOnline) {
      return <div className="status">{this.state.status}</div>;
    }

    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
