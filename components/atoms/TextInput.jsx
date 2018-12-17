import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`

`;

const Input = styled.input`

`;

function TextInput({
  className,
  label,
  onChangeHandler,
}) {
  return (
    <Label className={className}>
      {!!label && `${label}: `}
      <Input
        type="text"
        onChange={onChangeHandler}
      />
    </Label>
  );
}

TextInput.defaultProps = {
  className: '',
  label: null,
  onChangeHandler: () => {},
};

TextInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

export default TextInput;
