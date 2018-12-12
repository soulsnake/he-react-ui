import React, { Fragment } from 'react';
import TextField from '../';
import style from '../TextField.scss';
import { Heading, Paragraph, Icon } from '../../../';

export default {
  name: 'UnVerifiedStatus',
  component: TextField,
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
};
