import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prototype } from 'stream';

const Label = styled.label`

`;

const Select = styled.select`

`;

function generatePairName(pair) {
  // TODO return human-readable pair name
  return pair;
}

function Dropdown({
  className,
  label,
  items,
  onChangeHandler,
}) {
  return (
    <Label className={className}>
      {!!label && `${label}: `}
      <Select
        onChange={onChangeHandler}
      >
        <option hidden disabled selected value> -- select -- </option>
        {items.map(item => (
          <option
            key={item.key}
            value={item.value}
          >
            {generatePairName(item.label)}
          </option>
        ))};
      </Select>
    </Label>
  );
}

Dropdown.defaultProps = {
  className: '',
  label: null,
  items: [],
  onChangeHandler: () => {},
};

Dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf({
    key: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onChangeHandler: PropTypes.func,
};

export default Dropdown;
