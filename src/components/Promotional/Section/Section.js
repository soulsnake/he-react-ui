/**
 *
 * Section
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Section.scss';

function Section(props) {
  const { children, white } = props;
  const classes = classnames(styles.outer, {
    [styles.white]: white,
  });

  return (
    <div className={classes}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  white: PropTypes.bool,
};

Section.defaultProps = {
  white: false,
};

export default Section;
