import React from 'react';

const DeleteProfile: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="-1 0 46 46">
    <g fill="none" fillRule="evenodd">
      <path
        fill="#0071A0"
        d="M12.998 30A5.991 5.991 0 0 1 7 24V13C7 5.82 12.82 0 20 0s13 5.82 13 13v11c0 3.316-2.685 6-5.998 6H12.998z"
      />
      <path fill="#EAC3A2" d="M14 22h12v17H14z" />
      <path
        fill="#D3DDE1"
        d="M36.683 37.342L26 32l-6 6-5.982-6-10.701 5.342A6 6 0 0 0 0 42.708v2.286C0 45.55.45 46 1.009 46H38.99c.557 0 1.009-.444 1.009-1.006v-2.286a6 6 0 0 0-3.317-5.366z"
      />
      <path
        fill="#F1D9C5"
        d="M9 15v2c0 6.065 4.935 11 11 11s11-4.935 11-11v-2a3 3 0 0 0-3-3 9 9 0 0 1-8-4.873A9 9 0 0 1 12 12a3 3 0 0 0-3 3z"
      />
      <circle cx="36" cy="36" r="8" fill="#DF0E42" fillRule="nonzero" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M39 37h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
      />
    </g>
  </svg>
);

DeleteProfile.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default DeleteProfile;
