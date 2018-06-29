/**
 *
 * SupportItem
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SupportItem.scss';

function SupportItem(props) {
  const { extra, image, name } = props;

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

SupportItem.propTypes = {
  name: PropTypes.string.isRequired,
  extra: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default SupportItem;
