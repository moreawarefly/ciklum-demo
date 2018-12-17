import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/TextInput';
import Dropdown from '../../atoms/Dropdown';
import SubmitInput from '../../atoms/SubmitInput';
import * as formConfig from '../../../config/AddOrderFormConfig';
import useCurrencyPairs from '../../../services/useCurrencyPairs';

const Form = styled.form`

`;

function AddOrderForm() {
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
    console.log('form submit');
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
                label={formConfig.pairDropdown.label}
                items={pairItems}
                onChangeHandler={createChangeHandler(setPair)}
              />
            </div>
            <div>
              <Dropdown
                label={formConfig.sideDropdown.label}
                items={formConfig.sideDropdown.items}
                onChangeHandler={createChangeHandler(setSide)}
              />
            </div>
            <div>
              <Dropdown
                label={formConfig.orderTypeDropdown.label}
                items={formConfig.orderTypeDropdown.items}
                onChangeHandler={createChangeHandler(setOrderType)}
              />
            </div>
            <div>
              <TextInput
                label={formConfig.limitInput.label}
                onChangeHandler={createChangeHandler(setLimit)}
              />
            </div>
            <div>
              <TextInput
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

// AddOrderForm.defaultProps = {
//   pairItems: [],
// };

// AddOrderForm.propTypes = {
//   pairItems: PropTypes.arrayOf({
//     key: PropTypes.string,
//     value: PropTypes.string,
//     label: PropTypes.string,
//   }),
// };

export default AddOrderForm;
