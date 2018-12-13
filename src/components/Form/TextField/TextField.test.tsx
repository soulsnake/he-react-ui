import { mount } from 'enzyme';
import React from 'react';
import TextField from './';
import fixtures from './fixtures';

import testFixture from '../../../../config/testFixture';

fixtures.forEach(it => testFixture(it));

describe('TextField', () => {
  it('test interaction', () => {
    const handleOnChange = jest.fn();
    const harness = mount(
      <TextField
        id="demo"
        name="demo"
        label="Label"
        onChange={handleOnChange}
      />,
    );

    harness.find('input').simulate('focus');
    harness.find('input').simulate('blur');
    harness.find('input').simulate('change');
    expect(harness).toMatchSnapshot();
  });
});
