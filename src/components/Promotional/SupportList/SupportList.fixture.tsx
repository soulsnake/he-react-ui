import React from 'react';
import SupportList from '.';
import SupportItem from '../SupportItem';

const item = (
  <SupportItem
    name="Medical Bandages"
    extra="Adhesive only"
    image={{
      src: 'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
      alt: 'A bandage.',
    }}
  />
);
const content = (
  <React.Fragment>
    {item}
    {item}
    {item}
    {item}
    {item}
    {item}
    {item}
    {item}
    {item}
    {item}
  </React.Fragment>
);

export default {
  component: SupportList,
  children: content,
};
