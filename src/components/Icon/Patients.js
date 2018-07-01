// @flow
import React from 'react';

export type Props = { className?: string };

export default function Patients(props: Props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 26 26"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(1.000000, 1.000000)">
        <path d="m 16,-1 c -3.191534,0 -5.800781,2.6092473 -5.800781,5.8007812 0,1.595767 0.619905,3.1800961 1.630859,4.4238282 C 12.841032,10.468341 14.30365,11.400391 16,11.400391 c 1.69635,0 3.158968,-0.93205 4.169922,-2.1757816 C 21.180876,7.9808773 21.800781,6.3965482 21.800781,4.8007812 21.800781,1.6092473 19.191534,-1 16,-1 Z m 0,2 c 2.110866,0 3.800781,1.6899152 3.800781,3.8007812 0,1.0554331 -0.455395,2.2686415 -1.18164,3.1621094 -0.726246,0.893468 -1.664291,1.4375 -2.619141,1.4375 -0.95485,0 -1.892895,-0.544032 -2.619141,-1.4375 C 12.654614,7.0694227 12.199219,5.8562143 12.199219,4.8007812 12.199219,2.6899152 13.889134,1 16,1 Z" />
        <path d="m 16,12.599609 c -1.256836,0 -2.401048,0.144923 -3.414062,0.367188 a 1.0001,1.0001 0 1 0 0.427734,1.953125 C 13.896657,14.726187 14.896836,14.599609 16,14.599609 c 2.468327,0 4.424591,0.639998 5.707031,1.230469 C 22.499341,16.194563 23,16.967369 23,17.833984 V 23 h -7 a 1.0001,1.0001 0 1 0 0,2 h 9 V 17.833984 C 25,16.1886 24.032259,14.696834 22.542969,14.011719 21.055809,13.32699 18.813273,12.599609 16,12.599609 Z" />
        <path d="m 6.4003906,7 c -2.7494254,0 -5,2.2505746 -5,5 0,1.374713 0.5250772,2.748499 1.3847656,3.845703 0.8596885,1.097204 2.1197925,1.955078 3.6152344,1.955078 1.4954419,0 2.7555459,-0.857874 3.6152344,-1.955078 0.859688,-1.097204 1.384766,-2.47099 1.384766,-3.845703 0,-2.7494254 -2.250575,-5 -5.0000004,-5 z m 0,2 c 1.6681746,0 3,1.331825 3,3 0,0.834087 -0.3708728,1.860732 -0.9589844,2.611328 -0.5881115,0.750596 -1.3276575,1.189453 -2.0410156,1.189453 -0.7133581,0 -1.4529041,-0.438857 -2.0410156,-1.189453 C 3.7712635,13.860732 3.4003906,12.834087 3.4003906,12 c 0,-1.668175 1.3318254,-3 3,-3 z" />
        <path d="m 6.4003906,18.199219 c -2.1410516,0 -3.9505309,0.493452 -5.1796875,0.951172 C -0.10775364,19.645041 -1,20.919029 -1,22.339844 V 25 h 14.800781 v -2.660156 c 0,-1.420815 -0.892246,-2.694803 -2.220703,-3.189453 -1.229156,-0.45772 -3.0386357,-0.951172 -5.1796874,-0.951172 z m 0,2 c 1.8317484,0 3.4171784,0.429491 4.4824214,0.826172 0.557944,0.207749 0.917969,0.722467 0.917969,1.314453 V 23 H 1 V 22.339844 C 1,21.747858 1.3600255,21.23314 1.9179688,21.025391 2.9832122,20.62871 4.5686423,20.199219 6.4003906,20.199219 Z" />
      </g>
    </svg>
  );
}
