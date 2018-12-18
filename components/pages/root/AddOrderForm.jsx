import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/TextInput';
import Dropdown from '../../atoms/Dropdown';
import SubmitInput from '../../atoms/SubmitInput';
import * as formConfig from '../../../config/AddOrderFormConfig';
import useCurrencyPairs from '../../../services/useCurrencyPairs';

const Form = styled.form`

`;

function AddOrderForm({
  addOrderHandler,
}) {
  const [pair, setPair] = useState();
  const [side, setSide] = useState();
  const [orderType, setOrderType] = useState();
  const [limit, setLimit] = useState();
  const [quantity, setQuantity] = useState();
  const pairItems = useCurrencyPairs();

  function createChangeHandler(setStateFunction) {
    return (event) => setStateFunction(event.target.value);
  }

  function handleFormSubmit(event) {
    addOrderHandler({
      pair,
      side,
      orderType,
      limit,
      quantity,
    });
    event.preventDefault();
  }

  return (
    <div>
      {pairItems
        ? (
          <Form onSubmit={handleFormSubmit}>
            <div>
              pair: {pair}
              side: {side}
              orderType: {orderType}
              limit: {limit}
              quantity: {quantity}
            </div>
            <div>
              <Dropdown
                required
                label={formConfig.pairDropdown.label}
                items={pairItems}
                onChangeHandler={createChangeHandler(setPair)}
              />
            </div>
            <div>
              <Dropdown
                required
                label={formConfig.sideDropdown.label}
                items={formConfig.sideDropdown.items}
                onChangeHandler={createChangeHandler(setSide)}
              />
            </div>
            <div>
              <Dropdown
                required
                label={formConfig.orderTypeDropdown.label}
                items={formConfig.orderTypeDropdown.items}
                onChangeHandler={createChangeHandler(setOrderType)}
              />
            </div>
            <div>
              <TextInput
                required={orderType === 'limit'}
                type="number"
                label={formConfig.limitInput.label}
                onChangeHandler={createChangeHandler(setLimit)}
              />
            </div>
            <div>
              <TextInput
                required
                type="number"
                label={formConfig.quantityInput.label}
                onChangeHandler={createChangeHandler(setQuantity)}
              />
            </div>
            <div>
              <SubmitInput
                label={formConfig.submitInput.label}
              />
            </div>
          </Form>
        )
        : (
          <div>Loading</div>
        )
      }
    </div>
  );
}

AddOrderForm.propTypes = {
  addOrderHandler: PropTypes.func.isRequired,
};

export default AddOrderForm;
