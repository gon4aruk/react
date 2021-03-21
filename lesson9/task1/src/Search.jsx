import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({
      value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search">
        <input
          type="text"
          value={this.state.value}
          className="search__input"
          onChange={this.handleChange}
        />
        <button className="search__button" type="submit" onClick={this.onSubmit}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
