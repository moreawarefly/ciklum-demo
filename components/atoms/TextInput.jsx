import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  font-size: .9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapper = styled.div`
  ${(props) => {
    if (props.required) {
      return `
        overflow: hidden;
        position: relative;

        &:before {
          content:"";
          display: block;
          position:absolute;
          top: -5px;
          right: -5px;
          width: 10px;
          height: 10px;
          background-color: #85144b;
          transform: rotate(45deg);
        }
      `;
    }
  }}
`;

const Input = styled.input`
  margin-left: .5rem;
  background-color: #eee;
  border: none;
  border-radius: 3px;
  padding: .5rem;
  font-size: 1rem;
  box-sizing: border-box;
  width: 150px;
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
      <InputWrapper required={required}>
        <Input
          required={required}
          type={type}
          onChange={onChangeHandler}
        />
      </InputWrapper>
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
