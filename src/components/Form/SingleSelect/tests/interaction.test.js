// @flow
import { mount } from 'enzyme';
import React from 'react';
import SingleSelect from '../';

const options = [{ label: 'one', value: 'A' }, { label: 'two', value: 'B' }];

describe('SingleSelect', () => {
  it('should allow expanding', () => {
    const handleOpen = jest.fn();
    const harness = mount(
      <SingleSelect
        id="demo"
        name="demo"
        options={options}
        value={null}
        onBeforeOpen={handleOpen}
      />,
    );

    harness
      .find('div.Select')
      .first()
      .simulate('click');
  });
});
