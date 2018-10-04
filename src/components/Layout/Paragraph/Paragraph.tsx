import React from 'react';
import classnames from 'classnames';

import LoadingStrip from '../../Loading/LoadingStrip';
import style from './Paragraph.scss';

type Props = {
  children: any;
  className?: string;
};

function Paragraph(props: Props) {
  const { className, children, ...restProps } = props;
  const classes = classnames(style.paragraph, className);

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

export default Paragraph;
