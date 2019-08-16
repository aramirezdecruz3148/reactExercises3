import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex }) {
  return (
    <>
      <h3>
        <p>{name}</p>
        <p>{hex}</p>
      </h3>
    </>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
