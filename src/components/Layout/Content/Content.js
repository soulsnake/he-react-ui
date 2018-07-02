// @flow
import React from 'react';
import LoadingSpinner from '../../Loading/LoadingSpinner';
import style from './Content.scss';

function Content(props: { children: any }) {
  const { children } = props;

  return children ? (
    <div className={style.content}>{children}</div>
  ) : (
    <LoadingSpinner />
  );
}

export default Content;
