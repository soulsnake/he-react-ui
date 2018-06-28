/*
 * NavView
 */

// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';
import Heading from '../Heading';
import style from './BackView.scss';

function BackView(props) {
  const { heading, route } = props;

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

BackView.propTypes = {
  heading: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default BackView;
