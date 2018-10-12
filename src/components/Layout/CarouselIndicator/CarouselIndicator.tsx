/*
 * CarouselIndicator
 */

// Vendor
import React from 'react';
import classnames from 'classnames';

import style from './CarouselIndicator.scss';
import { returnNull } from '../../../util';

type Props = {
  length: number;
  current: number;
  nextStep?: () => void;
  onDotClick?: Function;
  className?: string;
};

const CarouselIndicator: React.SFC<Props> = props => {
  const { className, length, current, nextStep, onDotClick } = props;

  return (
    <div className={classnames(style.outer, className)}>
      <ol className={style.wrapper}>
        {Array(length)
          .fill(1)
          .map((_, index) => (
            <li
              key={`dot-${index + 1}`}
              className={classnames(style.item, {
                [style.active]: current === index,
              })}
              onClick={() => {
                if (onDotClick) onDotClick(index);
              }}
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
};
CarouselIndicator.defaultProps = {
  current: 0,
  length: 0,
  nextStep: returnNull,
};
export default CarouselIndicator;
