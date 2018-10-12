import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import testFixtures from '../../../../../config/testFixture';
import fixtures from '../fixtures/SubNavigation.fixture';
import SubNavigation from '../SubNavigation';

testFixtures(fixtures);

const wrapRouter = (Component: any) => (props: any) => (
  <MemoryRouter>
    <Component {...props} />
  </MemoryRouter>
);

describe('Subnavigation', () => {
  it('should invoke a callback when it displays tabs', () => {
    const SubNavigationWithRouter = wrapRouter(SubNavigation);
    const onDisplayTabs = jest.fn();
    const wrapper = mount(
      <SubNavigationWithRouter
        item={{ items: [{}] }}
        onDisplayTabs={onDisplayTabs}
      />,
    );
    expect(onDisplayTabs).toHaveBeenCalled();
    wrapper.setProps({ item: { items: [{}, {}] } });
    wrapper.update();
    expect(onDisplayTabs).toHaveBeenCalledTimes(2);
  });
});
