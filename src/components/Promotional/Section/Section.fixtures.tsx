import React from 'react';
import Section from '.';

const content = (
  <React.Fragment>
    <h2>Heading</h2>
    <p>
      What a great description of this product. This is a paragraph of text made
      to emulate a more detailed description of the item being promoted.
    </p>
    <p>It is just so versatile!</p>
    <p>
      What a great description of this product. This is a paragraph of text made
      to emulate a more detailed description of the item being promoted. It is
      really good if you take the time to check it out.
    </p>
  </React.Fragment>
);

export default [
  {
    name: 'Default',
    component: Section,
    children: content,
  },
  {
    name: 'White',
    component: Section,
    props: {
      white: true,
    },
    children: content,
  },
];
