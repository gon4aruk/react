import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ title, children, isOpen, onShow, onHide }) => {
  let button;
  let content;

  if (!isOpen) {
    button = (
      <button className="expand__toggle-btn" onClick={onShow}>
        <i className="fas fa-chevron-down"></i>
      </button>
    );
    content = null;
  } else {
    button = (
      <button className="expand__toggle-btn" onClick={onHide}>
        <i className="fas fa-chevron-up"></i>
      </button>
    );
    content = <div className="expand__content">{children}</div>;
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        {button}
      </div>
      {content}
    </div>
  );
};

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: '',
  isOpen: false,
};

export default Expand;
