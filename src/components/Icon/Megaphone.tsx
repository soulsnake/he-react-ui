import React from 'react';

const Megaphone: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 23 23">
    <path d="M6.025 12.988a1 1 0 0 0-.877 1.535l4 6.5a1 1 0 0 0 .004.006c.822 1.315 2.636 1.756 3.948.772 1.205-.904 1.53-2.58.748-3.83a1 1 0 0 0-.016-.026l-3-4.5a1 1 0 1 0-1.664 1.11l2.984 4.476c.217.35.142.873-.252 1.168-.288.216-.874.057-1.052-.228l-3.996-6.494a1 1 0 0 0-.827-.489z" />
    <path d="M21.97 0a1 1 0 0 0-.456.125L12.738 5H5c-2.745 0-5 2.255-5 5s2.255 5 5 5h7.74l8.774 4.875A1 1 0 0 0 23 19V1a1 1 0 0 0-1.03-1zM21 2.701V17.3l-7.514-4.174A1 1 0 0 0 13 13H5c-1.655 0-3-1.345-3-3s1.345-3 3-3h8a1 1 0 0 0 .486-.125z" />
  </svg>
);

Megaphone.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Megaphone;
