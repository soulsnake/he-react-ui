import { mount } from 'enzyme';
import * as React from 'react';
import testFixture from '../../../../../config/testFixture';
import CarouselIndicator from '../CarouselIndicator';
import fixture from '../fixtures/Default.fixture';

testFixture(fixture, 'Default');

test('it handles clicking the dot', () => {
  const onDotClick = jest.fn();
  const wrapper = mount(
    <CarouselIndicator length={3} current={0} onDotClick={onDotClick} />,
  );
  wrapper
    .find('li')
    .at(1)
    .simulate('click');
  expect(onDotClick).toHaveBeenCalledWith(1);
});
