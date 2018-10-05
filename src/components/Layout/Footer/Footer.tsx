import React from 'react';
import style from './Footer.scss';

type Props = { children?: any };

function Footer(props: Props) {
  const { children, ...restProps } = props;

  return (
    <div className={style.footer} {...restProps}>
      {children}
    </div>
  );
}

export default Footer;
