import React from 'react';
import renderer from 'react-test-renderer';
import OrdersLayout from '../../../../components/pages/root/OrdersLayout';

describe('OrdersLayout', () => {
  beforeEach(() => {
    const fakeData = JSON.stringify([{"pair":"btcusd","price_precision":5,"initial_margin":"30.0","minimum_margin":"15.0","maximum_order_size":"2000.0","minimum_order_size":"0.004","expiration":"NA","margin":true}]);
    fetch.resetMocks();
    fetch.mockResponse(fakeData);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<OrdersLayout />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
