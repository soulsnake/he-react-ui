import React from 'react';
import Highlight from '.';

const parentLayout = {
  marginTop: 200,
};
const content = (
  <div>
    <p>
      What a great description of <em>this product</em>. This is a paragraph of
      text made to emulate a more detailed description of the item being
      promoted.
    </p>
    <p>It is just so versatile!</p>
    <p>
      What a great description of this product. This is a paragraph of text made
      to emulate a more detailed description of the item being promoted. It is
      really good if you take the time to check it out.
    </p>
  </div>
);

export default [
  {
    name: 'Image',
    component: Highlight,
    props: {
      image: {
        src: 'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
        alt: 'A bandage.',
      },
    },
    children: content,
    parentLayout,
  },
  {
    name: 'YouTube',
    component: Highlight,
    props: {
      youtubeId: 'iYuXzohJUFE',
    },
    children: content,
    parentLayout,
  },
];
