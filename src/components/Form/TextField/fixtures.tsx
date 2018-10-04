import React from 'react';
import Input from '.';

export default [
  {
    name: 'Default',
    formWrapper: { value: '' },
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
    },
  },

  {
    name: 'small',
    formWrapper: { value: '' },
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      small: true,
    },
  },

  {
    name: 'smallNoLabel',
    formWrapper: { value: '' },
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      small: true,
    },
  },

  {
    name: 'password',
    formWrapper: { value: '' },
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'Password',
      password: true,
    },
  },

  {
    name: 'noLabel',
    formWrapper: { value: '' },
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
    },
  },

  {
    name: 'Disabled',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      disabled: true,
    },
  },

  {
    name: 'Error',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      error: "Something isn't right",
    },
  },

  {
    name: 'InvalidMarker',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      error: "Something isn't right",
      marker: true,
      value: 'Bruce',
    },
  },

  {
    name: 'ValidMarker',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      marker: true,
      value: 'Bruce',
    },
  },

  {
    name: 'Value',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      value: 'Oscar',
    },
  },

  {
    name: 'With helper',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      helper: <div>Test HTML</div>,
    },
  },
];
