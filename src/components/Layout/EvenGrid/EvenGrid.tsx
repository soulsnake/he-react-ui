/*
 * EvenGrid
 */

// Vendor
import React from 'react';
import style from './EvenGrid.scss';

function EvenGrid(props: { children: any }) {
  const { children, ...restProps } = props;

  return (
    <div className={style.outer} {...restProps}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={style.child}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default EvenGrid;
