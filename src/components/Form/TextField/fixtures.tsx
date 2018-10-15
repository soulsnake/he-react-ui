// @flow
import React, { Fragment } from 'react';
import Input from '.';
import { Heading, Paragraph, Icon } from '../../../';
import style from './TextField.scss';

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
      isValid: false,
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
      marker: 'tick-cross',
      value: 'Bruce',
      isValid: false,
    },
  },

  {
    name: 'ValidMarker',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      marker: 'tick-cross',
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
    name: 'Info tooltip',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      marker: 'info',
      markerTooltip: <div>Test HTML</div>,
    },
  },

  {
    name: 'Verified status',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'Mobile',
      marker: 'verify',
    },
  },

  {
    name: 'UnVerified status',
    component: Input,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'Mobile',
      marker: 'verify',
      isVerified: false,
      markerTooltip: (
        <Fragment>
          <Icon key="icon" name="Edit" className={style.editIcon} />
          <Heading key="h3" h3>
            Sample Popup
          </Heading>
          <Paragraph key="paragraph" className={style.paragraph}>
            Sample content
          </Paragraph>
        </Fragment>
      ),
    },
  },
];
