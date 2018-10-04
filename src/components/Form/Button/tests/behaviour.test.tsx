import { mount } from 'enzyme';
import React from 'react';
import Button from '../../Button';

describe('Button', () => {
  it('should handle being clicked with no handler', () => {
    const button = mount(
      <Button>
        <span id="inner">Nice</span>
      </Button>,
    );

    button.find('#inner').simulate('click');
  });

  it('should invoke its  callback', () => {
    const onClick = jest.fn();
    const button = mount(
      <Button onClick={onClick}>
        <span id="inner">Nice</span>
      </Button>,
    );

    button.find('#inner').simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
