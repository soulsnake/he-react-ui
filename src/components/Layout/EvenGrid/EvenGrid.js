/*
 * EvenGrid
 */

// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import style from './EvenGrid.scss';

function EvenGrid(props) {
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

EvenGrid.propTypes = {
  children: PropTypes.array,
};

export default EvenGrid;
