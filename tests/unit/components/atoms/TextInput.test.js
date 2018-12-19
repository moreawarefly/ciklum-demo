import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../../../../components/atoms/TextInput';

describe('Dropdown', () => {
  it('renders correctly w/o arguments', () => {
    const tree = renderer
      .create(<TextInput />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with provided all attributes', () => {
    const tree = renderer
      .create(
        <TextInput
          name="mockName"
          required
          type="number"
          label="mockLabel"
          onChangeHandler={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
