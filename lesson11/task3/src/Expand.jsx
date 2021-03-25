import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggleButton = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const icon = this.state.isOpen 
      ? <i className="fas fa-chevron-up"></i>
      : <i className="fas fa-chevron-down"></i>;
    let content = this.state.isOpen 
      ? <div className="expand__content">{this.props.children}</div>
      : null;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleButton}>
            {icon}
          </button>
        </div>
        {content}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
}

Expand.defaultProps = {
  title: '',
}

export default Expand;
