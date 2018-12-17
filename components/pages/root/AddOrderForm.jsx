import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/TextInput';
import Dropdown from '../../atoms/Dropdown';
import * as FormConfig from '../../../config/AddOrderFormConfig';

const FormElement = styled.form`

`;

function Form({
  pairItems,
}) {
  return (
    <FormElement>
      <Dropdown
        label={FormConfig.pairDropdown.label}
        items={pairItems}
      />
      <Dropdown
        label={FormConfig.sideDropdown.label}
        items={FormConfig.sideDropdown.items}
      />
      <Dropdown
        label={FormConfig.orderTypeDropdown.label}
        items={FormConfig.orderTypeDropdown.items}
      />
      <TextInput
        label={FormConfig.limitInput.label}
      />
      <TextInput
        label={FormConfig.quantityInput.label}
      />
    </FormElement>
  );
}

Form.defaultProps = {
  pairItems: [],
};

Form.propTypes = {
  pairItems: PropTypes.arrayOf({
    key: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default Form;
