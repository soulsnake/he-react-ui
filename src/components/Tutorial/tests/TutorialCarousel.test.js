// @flow
import { mount } from 'enzyme';
import React from 'react';
import TutorialOwner from '../TutorialOwner';
import TutorialSpy from './TutorialSpy';
import TutorialCarousel from '../TutorialCarousel';

function makeHarness(autoStart = false) {
  return mount(
    <TutorialOwner autoStart={autoStart} steps={['A', 'B', 'C', 'Z']}>
      <TutorialSpy />
      <TutorialCarousel />
    </TutorialOwner>,
  );
}

describe('TutorialCarousel', () => {
  it('should allow jumping around', () => {
    const harness = makeHarness(true);
    const getDot = i =>
      harness
        // .find('TutorialCarousel')
        .find('li.item')
        .at(i);

    expect(harness.find('#currentStep').text()).toBe('A');
    expect(getDot(0).hasClass('active')).toBe(true);
    expect(getDot(1).hasClass('active')).toBe(false);

    harness.find('.nextBtn').simulate('click');

    expect(getDot(0).hasClass('active')).toBe(false);
    expect(getDot(1).hasClass('active')).toBe(true);

    getDot(3).simulate('click');

    expect(harness.find('#currentStep').text()).toBe('Z');

    expect(getDot(0).hasClass('active')).toBe(false);
    expect(getDot(3).hasClass('active')).toBe(true);

    getDot(0).simulate('click');

    expect(harness.find('#currentStep').text()).toBe('A');
    expect(getDot(0).hasClass('active')).toBe(true);
  });

  it('should not render a Next button on the final step', () => {
    const harness = makeHarness(true);
    expect(harness.find('.nextBtn').length).toBe(1);
    harness
      // .find('TutorialCarousel')
      .find('li.item')
      .at(3)
      .simulate('click');

    expect(harness.find('.nextBtn').length).toBe(0);
  });
});
