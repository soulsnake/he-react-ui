import createTestContext from 'react-cosmos-test/enzyme';
import fixtures from './fixtures/DateRangePicker.fixtures';

fixtures.forEach(fixture => {
  const context = createTestContext({ fixture });
  context.mount();
  test(`<DateRangePicker /> rendered correctly with ${
    fixture.name
  } fixture`, () => expect(context.getWrapper()).toMatchSnapshot());
});

describe('DateRangePicker', () => {
  it('should open without errors', () => {
    const fixture = fixtures.find(it => it.name === 'withChoices');
    const context = createTestContext({ fixture });
    context.mount();
    const wrapper = context.getWrapper();

    const instance = wrapper
      .find('DateRangePicker')
      .at(0)
      .instance();

    instance.handleSelectOpen();
  });
});
