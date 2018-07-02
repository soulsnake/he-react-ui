// @flow
import React from 'react';

type Props = { className?: string };

export default function Delete(props: Props) {
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
        <path d="M5.5,3.5 L5.5,1 C5.5,0.44771525 5.94771525,0 6.5,0 L13.5,0 C14.0522847,0 14.5,0.44771525 14.5,1 L14.5,3.5 L19,3.5 C19.5522847,3.5 20,3.94771525 20,4.5 C20,5.05228475 19.5522847,5.5 19,5.5 L17.5,5.5 L17.5,19.5 C17.5,20.0522847 17.0522847,20.5 16.5,20.5 L3.5,20.5 C2.94771525,20.5 2.5,20.0522847 2.5,19.5 L2.5,5.5 L1,5.5 C0.44771525,5.5 0,5.05228475 0,4.5 C0,3.94771525 0.44771525,3.5 1,3.5 L5.5,3.5 Z M13.5,5.5 L6.5,5.5 L4.5,5.5 L4.5,18.5 L15.5,18.5 L15.5,5.5 L13.5,5.5 Z M9,9 C9,8.44771525 9.44771525,8 10,8 C10.5522847,8 11,8.44771525 11,9 L11,14 C11,14.5522847 10.5522847,15 10,15 C9.44771525,15 9,14.5522847 9,14 L9,9 Z M6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 L8,14 C8,14.5522847 7.55228475,15 7,15 C6.44771525,15 6,14.5522847 6,14 L6,9 Z M12,9 C12,8.44771525 12.4477153,8 13,8 C13.5522847,8 14,8.44771525 14,9 L14,14 C14,14.5522847 13.5522847,15 13,15 C12.4477153,15 12,14.5522847 12,14 L12,9 Z M7.5,3.5 L12.5,3.5 L12.5,2 L7.5,2 L7.5,3.5 Z" />
      </g>
    </svg>
  );
}
