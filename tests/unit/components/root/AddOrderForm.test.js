/**
 * @jest-environment jsdom
*/

import React from 'react';
import renderer from 'react-test-renderer';
import AddOrderForm from '../../../../components/pages/root/AddOrderForm';

global.fetch = require('jest-fetch-mock');

describe('AddOrderForm', () => {
  beforeEach(() => {
    const fakeData = JSON.stringify([{"pair":"btcusd","price_precision":5,"initial_margin":"30.0","minimum_margin":"15.0","maximum_order_size":"2000.0","minimum_order_size":"0.004","expiration":"NA","margin":true}]);
    fetch.resetMocks();
    fetch.mockResponse(fakeData);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<AddOrderForm addOrderHandler={() => {}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('calls handler with order object', () => {
  //   const handler = spy();
  //   const wrapper = mount(<AddOrderForm addOrderHandler={handler} />);
  //   wrapper.find('[type="submit"]').get(0).click();
  //   expect(handler).to.have.been.called();
  // });
});
