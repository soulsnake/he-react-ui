import React from 'react';
import Button from '../';

function Wrapper({ children }: { children: any }) {
  return (
    <div style={{ display: 'flex' }}>
      <Button>I am to the left</Button>
      {children}
      <Button>I am to the right</Button>
    </div>
  );
}

export default {
  component: Button,
  simulateSubmission: true,
  wrapper: { tag: Wrapper },
  children: 'Click me for action',
};
