import React, { Component } from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class Page extends Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="page">
        <h1 className="title">
          {`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}
        </h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} />

          <Profile handleChange={this.handleChange} userData={this.state.userData} />
        </main>
      </div>
    );
  }
}

export default Page;
