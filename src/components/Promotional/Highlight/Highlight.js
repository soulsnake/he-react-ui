/**
 *
 * Highlight
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import styles from './Highlight.scss';

function Highlight(props) {
  const { children, image, youtubeId } = props;
  const opts = {
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

Highlight.propTypes = {
  children: PropTypes.any.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  youtubeId: PropTypes.string,
};

export default Highlight;
