import createTestContext from 'react-cosmos-test/enzyme';
import fixtures from '../fixtures/fixtures';

const defaultFixture = fixtures.find(it => it.name === 'Default');

if (!defaultFixture) throw new Error('Test requires a Default fixture');

const onChangeOpenKey = jest.fn();

const fixture = {
  ...defaultFixture,
  props: {
    ...defaultFixture.props,
    openKey: null,
    onChangeOpenKey,
  },
};

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('Primarynavigation calls its openKeyChange handlers', () => {
  const wrapper = getWrapper();
  const nav = wrapper.find('PrimaryNavigation');
  expect(onChangeOpenKey).toHaveBeenCalledTimes(0);
  nav.instance().toggleBucket('anything');
  expect(onChangeOpenKey).toHaveBeenCalledWith('anything');
  nav.instance().closeBucket();
  expect(onChangeOpenKey).toHaveBeenCalledWith(null);
});
