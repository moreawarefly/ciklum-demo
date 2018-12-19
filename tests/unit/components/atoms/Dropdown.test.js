import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../../../../components/atoms/Dropdown';

describe('Dropdown', () => {
  it('renders correctly w/o arguments', () => {
    const tree = renderer
      .create(<Dropdown />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with provided all attributes', () => {
    const mockList = [
      {
        key: 'key1',
        value: 'value1',
        label: 'label1',
      },
      {
        key: 'key2',
        value: 'value2',
        label: 'label2',
      },
    ];

    const tree = renderer
      .create(
        <Dropdown
          items={mockList}
          name="mockName"
          required
          label="mockLabel"
          onChangeHandler={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
