import React, { useState } from 'react';
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
    <main>
      <AddOrderForm
        addOrderHandler={addOrderHandler}
      />
      <OrdersTable
        newOrder={newOrder}
      />
    </main>
  );
}

export default OrdersLayout;
