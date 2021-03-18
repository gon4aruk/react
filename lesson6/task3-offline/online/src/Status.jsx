import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.isOnline,
    };
  }

  setStatus = () => {
    this.setState({
      status: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.status ? <Online /> : <Offline setState={this.setStatus} />}
      </div>
    );
  }
}

export default Status;
