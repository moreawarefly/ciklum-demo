import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`

`;

const Input = styled.input`

`;

function TextInput({
  className,
  required,
  type,
  label,
  onChangeHandler,
}) {
  return (
    <Label className={className}>
      {!!label && `${label}: `}
      <Input
        required={required}
        type={type}
        onChange={onChangeHandler}
      />
    </Label>
  );
}

TextInput.defaultProps = {
  className: '',
  required: false,
  type: 'text',
  label: null,
  onChangeHandler: () => {},
};

TextInput.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

export default TextInput;
