import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, handleSubmit, type, autocomplete, name, htmlFor, length }) => (
  <input
    type={type}
    onSubmit={handleSubmit}
    autoComplete={autocomplete}
    name={name}
    htmlFor={htmlFor}
    placeholder={placeholder}
    length={length}
  />
);

Input.defaultProps = {
  type: 'Search',
  autoComplete: 'off',
  placeholder: '',
  length: '25'
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
};

export default Input;