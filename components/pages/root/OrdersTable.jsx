import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getOrders } from '../../../services/ordersStorageApi';

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;
`;

const Thr = styled.tr`
`;

const Th = styled.th`
  background-color: #ddd;
  text-align: left;
  padding: 5px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 10px 5px;
`;

const NoRecordsContainer = styled.div`
  text-align: center;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: .9rem;
  margin: .3rem 0;
`;

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
