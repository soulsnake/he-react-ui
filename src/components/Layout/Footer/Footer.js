// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import style from './Footer.scss';

function Footer(props) {
  const { children, ...restProps } = props;

  return (
    <div className={style.footer} {...restProps}>
      {children}
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
