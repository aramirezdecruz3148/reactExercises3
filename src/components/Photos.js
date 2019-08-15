import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './Photos.css';

function Photos({ photos }) {
  const photoList = photos.map(pic => {
    return (
      <li className={styles.Photos} key={pic}>
        <Photo pic={pic}/>
      </li>
    );
  });

  return (
    <ul>
      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string)
};

export default Photos;
