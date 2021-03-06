import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      totalItems: this.props.users.length,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const lastCurrentIndex = this.state.itemsPerPage * this.state.currentPage;
    const currentIndex = lastCurrentIndex - this.state.itemsPerPage;

    const usersList = this.props.users
      .slice(currentIndex, lastCurrentIndex)
      .map(user => <User key={user.id} name={user.name} age={user.age} />);

    return (
      <div>
        <Pagination goPrev={this.goPrev} goNext={this.goNext} {...this.state} />
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UsersList;
