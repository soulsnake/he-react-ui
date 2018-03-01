import React from 'react'

export default function CheckBoxChecked (props) {
  return (
    <svg className={props.className} width={`${props.width}px`} height={`${props.height}px`} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g>
          <rect fill={props.color} x="0" y="0" width="20" height="20" rx="2" />
          <polygon fill="#FFFFFF" points="15.9964712 7.90852951 14.0879417 6 8.63500023 11.4529414 5.90852951 8.72647072 4 10.6350002 8.63500023 15.2700005" />
        </g>
      </g>
    </svg>
  )
}
