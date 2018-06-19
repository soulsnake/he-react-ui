// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './Content.scss';
import LoadingSpinner from '../../Loading/LoadingSpinner';

class Content extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return children ? (
      <div className={style.content}>{children}</div>
    ) : (
      <LoadingSpinner />
    );
  }
}

export default Content;
