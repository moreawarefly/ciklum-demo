import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
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

  return (
    <div>
      {JSON.stringify(orders)};
    </div>
  );
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
