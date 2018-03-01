import React from 'react'

export default function CheckBoxUnchecked (props) {
  return (
    <svg className={props.className} width={`${props.width}px`} height={`${props.height}px`} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <rect id="path-1" x="0" y="0" width="20" height="20" rx="2" />
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g>
          <g>
            <use fill="#FFFFFF" fill-rule="evenodd" />
            <rect stroke={props.color} stroke-width="2" x="1" y="1" width="18" height="18" rx="2" />
          </g>
        </g>
      </g>
    </svg>
  )
}
