/**
 *
 * Highlight
 *
 */
import React from 'react';
import YouTube from 'react-youtube';
import styles from './Highlight.scss';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  children: any;
  image?: Image;
  youtubeId?: string;
};

function Highlight(props: Props) {
  const { children, image, youtubeId } = props;
  const opts: any = {
    playerVars: {
      color: 'white',
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className={styles.outer}>
      {image && (
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image.src} alt={image.alt} />
        </div>
      )}
      {youtubeId && (
        <div className={styles.videoWrapper}>
          <YouTube className={styles.youtube} videoId={youtubeId} opts={opts} />
        </div>
      )}
      <div className={styles.description}>{children}</div>
    </div>
  );
}

export default Highlight;
