/**
 *
 * Section
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Section.scss';

class Section extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    white: PropTypes.bool,
  };

  static defaultProps = {
    white: false,
  };

  render () {
    const { children, white } = this.props;
    const classes = classnames(styles.outer, {
      [styles.white]: white,
    });

    return (
      <div className={classes}>
        <div className={styles.inner}>{children}</div>
      </div>
    );
  }
}

export default Section;
