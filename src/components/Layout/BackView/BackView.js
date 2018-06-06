/*
 * NavView
 */

// Vendor
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

import Heading from '../Heading';
import style from './BackView.scss';

class BackView extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  };

  render() {
    const { heading, route } = this.props;

    return (
      <div>
        <div className={style.barOuter}>
          <div className={style.barInner}>
            <Link to={route}>
              <Heading h1 nav className={style.heading}>
                <Icon className={style.arrow} name="ArrowLeft" />
                {heading}
              </Heading>
            </Link>
          </div>
        </div>
        <div className={style.contentPusher} />
      </div>
    );
  }
}

export default BackView;
