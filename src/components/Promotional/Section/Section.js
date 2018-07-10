// @flow
/**
 *
 * Section
 *
 */
import React from 'react';
import classnames from 'classnames';
import styles from './Section.scss';

function Section(props: { white?: boolean, children: any }) {
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

Section.defaultProps = {
  white: false,
};

export default Section;
