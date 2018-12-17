import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/TextInput';
import Dropdown from '../../atoms/Dropdown';
import * as FormConfig from '../../../config/AddOrderFormConfig';

const Form = styled.form`

`;

function AddOrderForm({
  pairItems,
}) {
  // const [pair, setPair] = useState();
  const [side, setSide] = useState();
  const [orderType, setOrderType] = useState();
  const [limit, setLimit] = useState();
  const [quantity, setQuantity] = useState();

  function createChangeHandler(setStateFunction) {
    return (event) => setStateFunction(event.target.value);
  }

  return (
    <Form>
      <div>
        side: {side}
        orderType: {orderType}
        limit: {limit}
        quantity: {quantity}
      </div>
      <div>
        <Dropdown
          label={FormConfig.pairDropdown.label}
          items={pairItems}
        />
      </div>
      <div>
        <Dropdown
          label={FormConfig.sideDropdown.label}
          items={FormConfig.sideDropdown.items}
          onChangeHandler={createChangeHandler(setSide)}
        />
      </div>
      <div>
        <Dropdown
          label={FormConfig.orderTypeDropdown.label}
          items={FormConfig.orderTypeDropdown.items}
          onChangeHandler={createChangeHandler(setOrderType)}
        />
      </div>
      <div>
        <TextInput
          label={FormConfig.limitInput.label}
          onChangeHandler={createChangeHandler(setLimit)}
        />
      </div>
      <div>
        <TextInput
          label={FormConfig.quantityInput.label}
          onChangeHandler={createChangeHandler(setQuantity)}
        />
      </div>
    </Form>
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

export default AddOrderForm;
