import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorList = colors.map(({ name, hex }) => {
    return ( 
      <li key={name}>
        <Color name={name} hex={hex} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
