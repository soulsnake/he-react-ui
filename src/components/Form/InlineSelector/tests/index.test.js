import createTestContext from "react-cosmos-test/enzyme";
import fixture from "../fixtures/Default.fixture";

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test("<InlineSelector /> rendered correctly with fixture", () => {
  const wrapper = getWrapper();
  Object.keys(fixture.props.options).forEach(key => {
    expect(wrapper.text()).toContain(fixture.props.options[key].label);
  });

  expect(wrapper.find("div")).toHaveLength(
    Object.keys(fixture.props.options).length + 2
  );

  expect(wrapper).toMatchSnapshot();
});
