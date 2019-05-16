import React from 'react';
import PropTypes from 'prop-types';

export default function Color({ name, hex, rgb }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name} <div style={{ display:'inline-block', width:'10px', height:'10px', backgroundColor:hex }}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red: {rgb.red}</p>
        <p>Green: {rgb.green}</p>
        <p>Blue: {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};