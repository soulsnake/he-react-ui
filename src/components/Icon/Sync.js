// @flow
import React from 'react';

export type Props = { className?: string };

export default function Sync(props: Props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(2.000000, 2.000000)">
        <path d="M2.36917446,16.4552542 L1.99018113,19.1397903 C1.9129771,19.6866522 1.40707166,20.0673852 0.860209722,19.9901811 C0.313347782,19.9129771 -0.0673851726,19.4070717 0.00981886594,18.8602097 L0.715701219,13.8602097 C0.792202913,13.3183227 1.29007775,12.9385856 1.8329053,13.0081002 L7.12702295,13.6860663 C7.67483407,13.7562192 8.06205262,14.2571779 7.99189978,14.804989 C7.92174694,15.3528002 7.42078817,15.7400187 6.87297705,15.6698659 L4.0154168,15.303926 C5.47809315,16.9864419 7.64246933,18 10.005291,18 C14.3999645,18 18,14.3978468 18,10 C18,9.44771525 18.4477153,9 19,9 C19.5522847,9 20,9.44771525 20,10 C20,15.5021532 15.5047974,20 10.005291,20 C6.98114954,20 4.20695022,18.6646377 2.36917446,16.4552542 Z M17.6308255,3.54474576 L18.0098189,0.860209722 C18.0870229,0.313347782 18.5929283,-0.0673851726 19.1397903,0.00981886594 C19.6866522,0.0870229045 20.0673852,0.592928338 19.9901811,1.13979028 L19.2842988,6.13979028 C19.2077971,6.68167728 18.7099222,7.06141442 18.1670947,6.99189978 L12.8729771,6.31393368 C12.3251659,6.24378084 11.9379474,5.74282207 12.0081002,5.19501095 C12.0782531,4.64719983 12.5792118,4.25998128 13.1270229,4.33013412 L15.9845832,4.69607404 C14.5219069,3.01355812 12.3575307,2 9.99470899,2 C5.60003548,2 2,5.60215315 2,10 C2,10.5522847 1.55228475,11 1,11 C0.44771525,11 5.42101086e-20,10.5522847 5.42101086e-20,10 C5.42101086e-20,4.49784685 4.49520261,0 9.99470899,0 C13.0188505,0 15.7930498,1.33536232 17.6308255,3.54474576 Z" />
      </g>
    </svg>
  );
}
