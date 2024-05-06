import React from 'react';
import PropTypes from 'prop-types';

import './CompFontNeon.scss';

/**
 * Neon effect text component
 *
 * @component React component
 * @param {Object} props children, neonColor, neonSize, fontFamily, fontSize
 * @param {String} props.children string. type texts you want to render
 * @param {String} props.neonColor string. select among 'red', 'blue', 'yellow', 'green', 'orange', 'violet', 'white'
 * @param {String} props.neonSize string. select among 'xl', 'l', 'm', 's', 'xs'
 * @param {String} props.fontFamily string. type fontFamily you want to render
 * @param {String} props.fontSize string. type fontSize you want to render
 * @returns {JSX.Element} Neon effect text component
 *
 * @example
 * //Render a text component with neon effects
 * <CompFontNeon neonColor="red" neonSize='l' fontFamily="inherit" fontSize="100px">text</CompFontNeon>
 */
function CompFontNeon({ children, neonColor, neonSize, fontFamily, fontSize }) {
  const style = {
    fontFamily,
    fontSize,
  };

  return (
    <span style={style} className={`CompFontNeon ${neonColor}Color ${neonSize}`}>
      {children}
    </span>
  );
}
CompFontNeon.propTypes = {
  children: PropTypes.string.isRequired,
  neonColor: PropTypes.oneOf(['red', 'blue', 'yellow', 'green', 'orange', 'violet', 'white']).isRequired,
  neonSize: PropTypes.oneOf(['xl', 'l', 'm', 's', 'xs']).isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

export default CompFontNeon;
