import createTestContext from "react-cosmos-test/enzyme";
import fixture from "../fixtures/Default.fixture";

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test("<Popover /> rendered correctly with fixture", () => {
  const wrapper = getWrapper();
  expect(wrapper.find('div[role="tooltip"]').length).toEqual(1);
  expect(wrapper.find('div[role="tooltip"] div').length).toEqual(3);

  expect(wrapper).toMatchSnapshot();
});
