import React from 'react';
import PropTypes from 'prop-types';

import './CompFontNeon.scss';

/**
 * Neon effect text component
 *
 * @component React component
 * @param {Object} props children, color, fontFamily, fontSize
 * @param {String} props.children string
 * @param {String} props.color string. select among 'red', 'blue', 'yellow', 'green', 'orange', 'violet', 'white'
 * @param {String} props.fontFamily string
 * @param {String} props.fontSize string
 * @returns {JSX.Element} Neon effect text component
 *
 * @example
 * //Render a text component with neon effects
 * <CompFontNeon type="red" fontFamily="inherit" fontSize="100px">TEST</CompFontNeon>
 */
function CompFontNeon({ children, color, fontFamily, fontSize }) {
  const style = {
    fontFamily,
    fontSize,
  };

  return (
    <span style={style} className={`CompFontNeon ${color}`}>
      {children}
    </span>
  );
}
CompFontNeon.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'blue', 'yellow', 'green', 'orange', 'violet', 'white']).isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

export default CompFontNeon;
