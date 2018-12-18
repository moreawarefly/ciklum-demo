import React, { useState } from 'react';
import {
  Main,
  FormWrapper,
  OrdersWrapper,
} from './OrdersLayout.styles';
import AddOrderForm from './AddOrderForm';
import OrdersTable from './OrdersTable';
import { addOrder } from '../../../services/ordersStorageApi';

function OrdersLayout() {
  const [newOrder, setNewOrder] = useState();

  function addOrderHandler(order) {
    addOrder(order);
    setNewOrder(order);
  }

  return (
    <Main>
      <FormWrapper>
        <AddOrderForm
          addOrderHandler={addOrderHandler}
        />
      </FormWrapper>
      <OrdersWrapper>
        <OrdersTable
          newOrder={newOrder}
        />
      </OrdersWrapper>
    </Main>
  );
}

export default OrdersLayout;
