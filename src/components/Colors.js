import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';


export default function Colors({ colors }) {

  const colorsList = colors.map(color => {
    return (
      <li key={color.name}>
        <Color name={color.name} hex={color.hex} rgb={color.rgb} />
      </li>

    );
  });
  return (
    <ul>
      {colorsList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};