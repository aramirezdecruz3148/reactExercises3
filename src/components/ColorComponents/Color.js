import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  return (
    <>
      <h3>
        <p>{name}</p>
        <p>{hex}</p>
        <p>rgb({rgb})</p>
      </h3>
    </>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired
};

export default Color;
