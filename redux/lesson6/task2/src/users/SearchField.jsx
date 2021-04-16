import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../users.actions';

class SearchField extends React.Component {
  state = {
    userName: '',
  };

  onChange = event => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleSearchUser = () => {
    this.props.fetchUser(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleSearchUser}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  fetchUser: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
