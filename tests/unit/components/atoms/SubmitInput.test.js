import React from 'react';
import renderer from 'react-test-renderer';
import SubmitInput from '../../../../components/atoms/SubmitInput';

describe('Dropdown', () => {
  it('renders correctly w/o arguments', () => {
    const tree = renderer
      .create(<SubmitInput />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with provided all attributes', () => {
    const tree = renderer
      .create(
        <SubmitInput
          label="mockLabel"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
