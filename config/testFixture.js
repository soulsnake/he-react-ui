import createTestContext from 'react-cosmos-test/enzyme'

export default function testFixture(fixture, name) {
  const { mount, getWrapper } = createTestContext({ fixture })
  mount()
  test(`<${
    fixture.component.name
  } /> rendered correctly with ${name} fixture`, () =>
    expect(getWrapper()).toMatchSnapshot())
}