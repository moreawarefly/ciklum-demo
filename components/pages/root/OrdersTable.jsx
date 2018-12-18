import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Thr,
  Th,
  Tr,
  Td,
  NoRecordsContainer,
  Header,
} from './OrdersTable.styles';
import { getOrders } from '../../../services/ordersStorageApi';

function OrdersTable({
  newOrder,
}) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  useEffect(() => {
    if (Object.keys(newOrder).length) {
      setOrders([newOrder, ...orders]);
    }
  }, [newOrder]);

  const ordersTableElement = (
    <div>
      <Header>Saved orders</Header>
      <Table>
        <thead>
          <Thr>
            <Th>Pair</Th>
            <Th>Side</Th>
            <Th>Type</Th>
            <Th>Limit</Th>
            <Th>Qty</Th>
          </Thr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <Tr key={index}>
              <Td>{order.pair}</Td>
              <Td>{order.side}</Td>
              <Td>{order.orderType}</Td>
              <Td>{order.limit}</Td>
              <Td>{order.quantity}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  const noRecordsElement = (
    <NoRecordsContainer>
      No orders to be displayed.
    </NoRecordsContainer>
  );

  return (orders && orders.length) ? ordersTableElement : noRecordsElement;
}

OrdersTable.defaultProps = {
  newOrder: {},
};

OrdersTable.propTypes = {
  newOrder: PropTypes.shape({
    pair: PropTypes.string,
    side: PropTypes.string,
    orderType: PropTypes.string,
    limit: PropTypes.string,
    quantity: PropTypes.string,
  }),
};

export default OrdersTable;
