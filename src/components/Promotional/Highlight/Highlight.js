/**
 *
 * Highlight
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import styles from './Highlight.scss';

class Highlight extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    youtubeId: PropTypes.string,
  };

  render() {
    const { children, image, youtubeId } = this.props;

    return (
      <div className={styles.outer}>
        {image && (
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image.src} alt={image.alt} />
          </div>
        )}
        {youtubeId && (
          <div className={styles.videoWrapper}>
            <YouTube className={styles.youtube} videoId={youtubeId} />
          </div>
        )}
        <div className={styles.description}>{children}</div>
      </div>
    );
  }
}

export default Highlight;
