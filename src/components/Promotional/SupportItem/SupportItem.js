/**
 *
 * SupportItem
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SupportItem.scss';

class SupportItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    extra: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { extra, image, name } = this.props;

    return (
      <div className={styles.outer}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image.src} alt={image.alt} />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.extra}>{extra}</div>
      </div>
    );
  }
}

export default SupportItem;
