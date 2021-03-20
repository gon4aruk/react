import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.updateStatus);
    window.addEventListener('offline', this.updateStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateStatus);
    window.removeEventListener('offline', this.updateStatus);
  }

  updateStatus = () => {
    this.setState({
      status: this.state.status === 'online' ? 'offline' : 'online',
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
