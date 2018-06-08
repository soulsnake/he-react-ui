import createTestContext from 'react-cosmos-test/enzyme';
import fixtures from './DoubleDatePicker.fixtures';

fixtures.forEach(fixture => {
  const context = createTestContext({ fixture });
  context.mount();
  test(`<DoubleDatePicker /> rendered correctly with ${
    fixture.name
  } fixture`, () => expect(context.getWrapper()).toMatchSnapshot());
});
