import React, { Component } from 'react';
import Header from './Header';
import { UserContext } from './user-context';

class Page extends Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userData}>
        <Header />
      </UserContext.Provider>
    );
  }
}

export default Page;
