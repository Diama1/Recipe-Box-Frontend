import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  onChange, value, type, placeholder, name,
}) => (
  <input
    type={type}
    className="form-control"
    defaultValue={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    required
  />
);

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
