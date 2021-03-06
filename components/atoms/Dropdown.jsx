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

const SelectWrapper = styled.div`
  position:relative;
  display: inline;
  margin-left: .5rem;

  ${(props) => {
    if (props.required) {
      return `
        overflow: hidden;

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

  &:after {
    content:"";
    width: 0;
    height: 0;
    position:absolute;
    pointer-events: none;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: .9rem;
    right: .75rem;
    border-top: 6px solid black;
    opacity: 0.5;
  }
`;

const Select = styled.select`
  appearance: none;
  background-color: #eee;
  border: none;
  border-radius: 3px;
  padding: .5rem 35px .5rem .5rem;
  font-size: 1rem;
  box-sizing: border-box;
  width: 150px;
`;

function Dropdown({
  className,
  name,
  required,
  label,
  items,
  onChangeHandler,
}) {
  return (
    <Label className={className}>
      {!!label && `${label}: `}
      <SelectWrapper required={required}>
        <Select
          name={name}
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
      </SelectWrapper>
    </Label>
  );
}

Dropdown.defaultProps = {
  className: '',
  name: '',
  required: false,
  label: null,
  items: [],
  onChangeHandler: () => {},
};

Dropdown.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
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
