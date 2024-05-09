import React from 'react';
import PropTypes from 'prop-types';

import './CompDivNeon.scss';

/**
 * Neon effect div component
 *
 * @component React component
 * @param {Object} props children. className, neonColor, neonSize, borderWidth
 * @param {any} props.children string. DOM element, JSX element. type texts you want to render
 * @param {string} props.className string. you can add more class names
 * @param {String} props.neonColor string. select among 'red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black'
 * @param {String} props.neonSize string. select among 'xl', 'l', 'm', 's', 'xs'
 * @param {String} props.borderWidth string. type borderWidth you want to render
 * @returns {JSX.Element} Neon effect div component
 *
 * @example
 * //Render a div component with neon effects
 *
 */
function CompDivNeon({ children, className, neonColor, neonSize, borderWidth }) {
  const style = {
    borderWidth,
  };

  return (
    <div style={style} className={`CompDivNeon ${className} ${neonColor}Color ${neonSize}`}>
      {children}
    </div>
  );
}
CompDivNeon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.instanceOf(Element)]).isRequired,
  className: PropTypes.string.isRequired,
  neonColor: PropTypes.oneOf(['red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black']).isRequired,
  neonSize: PropTypes.oneOf(['xl', 'l', 'm', 's', 'xs']).isRequired,
  borderWidth: PropTypes.string.isRequired,
};

export default CompDivNeon;
