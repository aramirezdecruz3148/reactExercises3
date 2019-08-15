import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import styles from './PhotoAlbum.css';

function PhotoAlbum({ title, photos }) {
  return (
    <div className={styles.PhotoAlbum}>
      <h3>{title}</h3>
      <Photos photos={photos}/>
    </div>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string)
};

export default PhotoAlbum;
