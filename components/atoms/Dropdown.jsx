import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`

`;

const Select = styled.select`

`;

function generatePairName(pair) {
  // TODO return human-readable pair name
  return pair;
}

function Dropdown({
  label,
  items,
}) {
  return (
    <Label>
      {!!label && `${label}: `}
      <Select>
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
  label: null,
  items: [],
};

Dropdown.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf({
    key: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default Dropdown;
