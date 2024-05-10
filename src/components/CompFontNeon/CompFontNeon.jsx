import React from 'react';
import PropTypes from 'prop-types';

import './CompFontNeon.scss';

/**
 * Neon effect text component
 *
 * @component React component
 * @param {Object} props children, className, neonColor, neonSize, fontFamily, fontSize
 * @param {any} props.children any. type texts you want to render. only texts are supported
 * @param {string} props.className string. you can add more class names
 * @param {String} props.neonColor string. select among 'red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black'
 * @param {String} props.neonSize string. select among 'xl', 'l', 'm', 's', 'xs'
 * @param {String} props.fontFamily string. type fontFamily you want to render
 * @param {String} props.fontSize string. type fontSize you want to render
 * @returns {JSX.Element} Neon effect text component
 *
 * @example
 * //Default Values
 * <CompFontNeon className="" neonColor="red" neonSize='l' fontFamily="unset" fontSize="unset">
 *   null
 * </CompFontNeon>
 */
function CompFontNeon({ children, className, neonColor, neonSize, fontFamily, fontSize }) {
  const style = {
    fontFamily,
    fontSize,
  };

  return (
    <span style={style} className={`${className} CompFontNeon ${neonColor}Color ${neonSize}`}>
      {children}
    </span>
  );
}
CompFontNeon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  neonColor: PropTypes.oneOf(['red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black']),
  neonSize: PropTypes.oneOf(['xl', 'l', 'm', 's', 'xs']),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
};
CompFontNeon.defaultProps = {
  children: null,
  className: '',
  neonColor: 'red',
  neonSize: 'l',
  fontFamily: 'unset',
  fontSize: 'unset',
};

export default CompFontNeon;
