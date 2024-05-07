import React from 'react';
import PropTypes from 'prop-types';

import './CompButtonLight.scss';

/**
 * Light effect button component
 *
 * @component React component
 * @param {Object} props children, onClick, neonSize, padding, letterSpacing
 * @param {Element} props.children element. Insert elements you want to cover with light effect button
 * @param {Function} props.onClick function. onClick event.
 * @returns {JSX.Element} Light effect button component
 *
 * @example
 * //Render a Button component with light effects
 * <CompButtonLight onClick={function}>element</CompButtonLight>
 */
function CompButtonLight({ children, onClick, neonSize, padding, letterSpacing }) {
  const style = {
    padding,
    letterSpacing,
  };

  return (
    <div className="CompButtonLight">
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <button type="button" style={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
CompButtonLight.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  neonSize: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string.isRequired,
};

export default CompButtonLight;
