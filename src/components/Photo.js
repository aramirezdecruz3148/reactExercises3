import React from 'react';
import PropTypes from 'prop-types';

function Photo({ pic }) {
  return (
    <>
      <img src={pic} alt='a photo in my album'/>
    </>
  );
}

Photo.propTypes = {
  pic: PropTypes.string.isRequired
};

export default Photo;

