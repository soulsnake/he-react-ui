/**
 *
 * SupportItem
 *
 */
import React from 'react';
import styles from './SupportItem.scss';

type Image = { src: string; alt: string };

type Props = {
  name: string;
  extra?: string;
  image: Image;
};

function SupportItem(props: Props) {
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

export default SupportItem;
