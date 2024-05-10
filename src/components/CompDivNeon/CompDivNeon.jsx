import React from 'react';
import PropTypes from 'prop-types';

import './CompDivNeon.scss';

/**
 * Neon effect div component
 *
 * @component React component
 * @param {Object} props children. className, neonColor, neonSize, borderWidth
 * @param {any} props.children any.
 * @param {string} props.className string. you can add more class names
 * @param {String} props.neonColor string. select among 'red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black'
 * @param {String} props.neonSize string. select among 'xl', 'l', 'm', 's', 'xs'
 * @param {String} props.borderWidth string. type borderWidth you want to render
 * @returns {JSX.Element} Neon effect div component
 *
 * @example
 * //Default Values
 * <CompDivNeon className="" neonColor="red" neonSize="l" borderWidth="2px">
 *   null
 * </CompDivNeon>
 */
function CompDivNeon({ children, className, neonColor, neonSize, borderWidth }) {
  const style = {
    borderWidth,
  };

  return (
    <div style={style} className={`${className} CompDivNeon ${neonColor}Color ${neonSize}`}>
      {children}
    </div>
  );
}
CompDivNeon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  neonColor: PropTypes.oneOf(['red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black']),
  neonSize: PropTypes.oneOf(['xl', 'l', 'm', 's', 'xs']),
  borderWidth: PropTypes.string,
};
CompDivNeon.defaultProps = {
  children: null,
  className: '',
  neonColor: 'red',
  neonSize: 'l',
  borderWidth: '2px',
};

export default CompDivNeon;
