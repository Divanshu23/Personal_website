import React from 'react';
import PropTypes from 'prop-types';

const SkillTile = ({ handleClick, active, label }) => (

  
  <button
    className='skillbutton1'
  >
    &#x25cf; {label}

  </button>
);

SkillTile.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

export default SkillTile;
