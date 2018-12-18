import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  z-index: 1;
  padding: .5rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #666;
`;

function SubmitInput({
  className,
  label,
}) {
  return (
    <Input
      className={className}
      type="submit"
      value={label}
    />
  );
}

SubmitInput.defaultProps = {
  className: '',
  label: '',
};

SubmitInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default SubmitInput;
