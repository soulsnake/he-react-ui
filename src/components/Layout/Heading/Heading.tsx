import React from 'react';
import classnames from 'classnames';

import LoadingStrip from '../../Loading/LoadingStrip';
import style from './Heading.scss';

type Props = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  nav?: boolean;
  children: any;
  className?: string;
};

const Heading: React.SFC<Props> = props => {
  const { className, children, h1, h2, h3, h4, nav, ...restProps } = props;
  const classes = classnames(
    style.heading,
    {
      [style.h1]: h1,
      [style.h2]: h2,
      [style.h3]: h3,
      [style.h4]: h4,
      [style.nav]: nav,
    },
    className,
  );
  const content = children || <LoadingStrip className={style.loading} />;

  if (h2 === true) {
    return (
      <h2 className={classes} {...restProps}>
        {content}
      </h2>
    );
  }
  if (h3 === true) {
    return (
      <h3 className={classes} {...restProps}>
        {content}
      </h3>
    );
  }
  if (h4 === true) {
    return (
      <h4 className={classes} {...restProps}>
        {content}
      </h4>
    );
  }
  return (
    <h1 className={classes} {...restProps}>
      {content}
    </h1>
  );
};

Heading.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  nav: false,
};

export default Heading;
