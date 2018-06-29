// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import LoadingSpinner from '../../Loading/LoadingSpinner';
import style from './Content.scss';

function Content(props) {
  const { children } = props;

  return children ? (
    <div className={style.content}>{children}</div>
  ) : (
    <LoadingSpinner />
  );
}

Content.propTypes = {
  children: PropTypes.any,
};

export default Content;
