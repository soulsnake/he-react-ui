/*
 * CarouselIndicator
 */

// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './CarouselIndicator.scss';

class CarouselIndicator extends Component {
  static propTypes = {
    className: PropTypes.string,
    length: PropTypes.number,
    current: PropTypes.number,
    showNext: PropTypes.bool,
    nextStep: PropTypes.func,
  };

  render() {
    const {
      className,
      length,
      current,
      showNext,
      nextStep,
      ...restProps
    } = this.props;

    return (
      <div
        className={classnames(style.outer, {
          [className]: className,
        })}
        {...restProps}
      >
        <ol className={style.wrapper}>
          {Array(length)
            .fill(1)
            .map((child, index) => (
              <li
                key={`dot-${index + 1}`}
                className={classnames(style.item, {
                  [style.active]: current === index,
                })}
              />
            ))}

          {current < length - 1 && (
            <li className={style.nextBtn} onClick={nextStep}>
              Next
            </li>
          )}
        </ol>
      </div>
    );
  }
}

export default CarouselIndicator;
