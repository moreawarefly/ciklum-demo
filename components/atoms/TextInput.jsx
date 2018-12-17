import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`

`;

const Input = styled.input`

`;

function TextInput({
  label,
  value,
  onChangeHandler,
}) {
  return (
    <Label>
      {!!label && `${label}: `}
      <Input
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
    </Label>
  );
}

TextInput.defaultProps = {
  label: null,
  value: '',
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

export default TextInput;
