import React from 'react';
import PropTypes from 'prop-types';
import style from './DoubleDatePicker.module.scss';

export default class DoubleDatePicker extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;
    return <div className={style.main}>{children}</div>;
  }
}
