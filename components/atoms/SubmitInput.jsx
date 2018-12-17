import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

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
