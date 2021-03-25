import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ title, children, isOpen, onToggle }) => {
  let icon;
  let content;

  if (!isOpen) {
    icon = <i className="fas fa-chevron-down"></i>;
    content = null;
  } else {
    icon = <i className="fas fa-chevron-up"></i>;
    content = <div className="expand__content">{children}</div>;
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
          {icon}
        </button>
      </div>
      {content}
    </div>
  );
};

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: '',
  isOpen: false,
};

export default Expand;
