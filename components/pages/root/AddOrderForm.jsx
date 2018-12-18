import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/TextInput';
import Dropdown from '../../atoms/Dropdown';
import SubmitInput from '../../atoms/SubmitInput';
import * as formConfig from '../../../config/AddOrderFormConfig';
import useCurrencyPairs from '../../../services/useCurrencyPairs';

const ControlWrapper = styled.div`
  padding: .25rem 0;
  border-top: 1px solid #eee;
`;

const SubmitWrapper = styled.div`
  text-align: right;
  padding: .25rem 0;
  border-top: 1px solid #eee;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: .9rem;
  margin: .3rem 0;
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

  const formElement = (
    <div>
      <Header>Add order</Header>
      <form onSubmit={handleFormSubmit}>
        <ControlWrapper>
          <Dropdown
            required
            label={formConfig.pairDropdown.label}
            items={pairItems}
            onChangeHandler={createChangeHandler(setPair)}
          />
        </ControlWrapper>
        <ControlWrapper>
          <Dropdown
            required
            label={formConfig.sideDropdown.label}
            items={formConfig.sideDropdown.items}
            onChangeHandler={createChangeHandler(setSide)}
          />
        </ControlWrapper>
        <ControlWrapper>
          <Dropdown
            required
            label={formConfig.orderTypeDropdown.label}
            items={formConfig.orderTypeDropdown.items}
            onChangeHandler={createChangeHandler(setOrderType)}
          />
        </ControlWrapper>
        <ControlWrapper>
          <TextInput
            required={orderType === 'limit'}
            type="number"
            label={formConfig.limitInput.label}
            onChangeHandler={createChangeHandler(setLimit)}
          />
        </ControlWrapper>
        <ControlWrapper>
          <TextInput
            required
            type="number"
            label={formConfig.quantityInput.label}
            onChangeHandler={createChangeHandler(setQuantity)}
          />
        </ControlWrapper>
        <SubmitWrapper>
          <SubmitInput
            label={formConfig.submitInput.label}
          />
        </SubmitWrapper>
      </form>
    </div>
  );

  return pairItems ? formElement : (<div>Loading</div>); // TODO add fancy loader
}

AddOrderForm.propTypes = {
  addOrderHandler: PropTypes.func.isRequired,
};

export default AddOrderForm;
