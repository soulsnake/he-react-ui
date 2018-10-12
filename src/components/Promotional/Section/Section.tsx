/**
 *
 * Section
 *
 */
import React from 'react';
import classnames from 'classnames';
import styles from './Section.scss';

const Section: React.SFC<{ white?: boolean; children: any }> = props => {
  const { children, white } = props;
  const classes = classnames(styles.outer, {
    [styles.white]: white,
  });

  return (
    <div className={classes}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

Section.defaultProps = {
  white: false,
};

export default Section;
