// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LoadingStrip from '../../Loading/LoadingStrip';
import style from './Paragraph.scss';

function Paragraph(props) {
  const { className, children, ...restProps } = props;
  const classes = classnames(style.paragraph, {
    [className]: className,
  });

  if (children) {
    return (
      <p className={classes} {...restProps}>
        {children}
      </p>
    );
  }
  return (
    <div>
      <LoadingStrip className={style.loading} />
      <LoadingStrip className={style.loading} />
      <LoadingStrip className={style.loading} />
    </div>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Paragraph;
