import createTestContext from "react-cosmos-test/enzyme";
import fixture from "../fixtures/Default.fixture";

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test("<TextField /> rendered correctly with fixture", () => {
  const wrapper = getWrapper();
  expect(wrapper.find("label").length).toEqual(1);
  expect(wrapper.find("input").length).toEqual(1);

  expect(wrapper).toMatchSnapshot();
});
