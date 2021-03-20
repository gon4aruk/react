import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'Online',
  };

  componentDidMount() {
    window.addEventListener('online', this.updateStatus);
    window.addEventListener('offline', this.updateStatus);
  }

  updateStatus = () => {
    this.setState({
      status: this.state.status === 'Online' ? 'Offline' : 'Online',
    });
  };

  render() {
    const isOnline = this.state.status === 'Online' ? true : false;

    if (isOnline) {
      return <div className="status">{this.state.status}</div>;
    }

    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
