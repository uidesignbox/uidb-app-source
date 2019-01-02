import React from 'react';
import PropTypes from 'prop-types';

const InputSubmit = ({ type, title, classes, children }) => (
  <button
    type={type}
    title={title}
    className={classes}
  >
    { children }
  </button>
);

InputSubmit.propTypes = {
  submit: PropTypes.func.isRequired,
  title: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.any,
};

export default InputSubmit;