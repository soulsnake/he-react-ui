// @flow
import React from 'react';

export default function Ellipsis(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <g transform="translate(0 8)">
        <circle cx="2" cy="2" r="2" />
        <circle cx="10" cy="2" r="2" />
        <circle cx="18" cy="2" r="2" />
      </g>
    </svg>
  );
}
