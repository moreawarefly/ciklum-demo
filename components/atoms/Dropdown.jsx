import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`

`;

const Select = styled.select`

`;

function Dropdown({
  className,
  required,
  label,
  items,
  onChangeHandler,
}) {
  return (
    <Label className={className}>
      {!!label && `${label}: `}
      <Select
        required={required}
        onChange={onChangeHandler}
        defaultValue={undefined}
      >
        <option value=""> -- select -- </option>
        {items.map(item => (
          <option
            key={item.key}
            value={item.value}
          >
            {(item.label)}
          </option>
        ))};
      </Select>
    </Label>
  );
}

Dropdown.defaultProps = {
  className: '',
  required: false,
  label: null,
  items: [],
  onChangeHandler: () => {},
};

Dropdown.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  onChangeHandler: PropTypes.func,
};

export default Dropdown;
