/*
 * EvenGrid
 */

// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './EvenGrid.scss';

class EvenGrid extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    const { children, ...restProps } = this.props;

    return (
      <div className={style.outer} {...restProps}>
        {children.map((child, index) => (
          <div key={index} className={style.child}>
            {child}
          </div>
        ))}
      </div>
    );
  }
}

export default EvenGrid;
