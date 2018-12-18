import React from 'react';
import AddOrderForm from './AddOrderForm';
import OrdersTable from './OrdersTable';

function OrdersLayout() {
  return (
    <main>
      <AddOrderForm />
      <OrdersTable />
    </main>
  );
}

export default OrdersLayout;
