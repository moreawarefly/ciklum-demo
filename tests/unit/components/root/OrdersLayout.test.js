import React from 'react';
import renderer from 'react-test-renderer';
import OrdersLayout from '../../../../components/pages/root/OrdersLayout';

it('renders correctly', () => {
  const tree = renderer
    .create(<OrdersLayout />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
