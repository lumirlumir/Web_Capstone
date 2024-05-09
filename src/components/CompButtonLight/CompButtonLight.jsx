import React from 'react';
import PropTypes from 'prop-types';

import './CompButtonLight.scss';

/**
 * Light effect button component
 *
 * @component React component
 * @param {Object} props children, onClick, neonSize, padding, letterSpacing
 * @param {Element} props.children any. Insert elements you want to cover with light effect button
 * @param {Function} props.onClick function. onClick event.
 * @param {String} props.neonSize string.
 * @param {String} props.padding string.
 * @param {String} props.letterSpacing string.
 * @returns {JSX.Element} Light effect button component
 *
 * @example
 * //Default Values
 * <CompButtonLight onClick={function} neonSize="2px" padding="10px" letterSpacing="4px">
 *   null
 * </CompButtonLight>
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
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  neonSize: PropTypes.string,
  padding: PropTypes.string,
  letterSpacing: PropTypes.string,
};
CompButtonLight.defaultProps = {
  children: null,
  neonSize: '2px',
  padding: '10px',
  letterSpacing: '4px',
};

export default CompButtonLight;
