import React from 'react';

const Pencil: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 44 44">
    <g fill="none" fillRule="nonzero">
      <path d="M-2-3h48v48H-2z" />
      <path
        fill="#051E2A"
        d="M5.463 42.083L4.38 39l-3.083-1.083-.66 3.666a1 1 0 0 0 1.16 1.161l3.666-.661z"
      />
      <path
        fill="#FFF0CC"
        d="M13.087 40.707l-1.77-8.645-8.644-1.769-1.376 7.624 4.166 4.166z"
      />
      <path
        fill="#FF7033"
        d="M43.087 9.293l-9-9a1 1 0 0 0-1.414 0l-6 6 10.414 10.414 6-6a1 1 0 0 0 0-1.414z"
      />
      <path fill="#FFD366" d="M26.673 6.293l-24 24L8.63 36.25 32.59 12.208z" />
      <path fill="#FFB700" d="M7.88 35.5l24-24 5.207 5.208-24 24z" />
      <path fill="#CC3D00" d="M25.967 7l1.414-1.415L37.795 16l-1.414 1.414z" />
    </g>
  </svg>
);

Pencil.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Pencil;
