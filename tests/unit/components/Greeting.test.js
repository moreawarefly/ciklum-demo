import renderer from 'react-test-renderer';
import Greeting from '../../../components/Greeting';

it('renders correctly', () => {
  const tree = renderer
    .create(<Greeting />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
