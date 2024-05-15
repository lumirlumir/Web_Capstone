import React from 'react';
import PropTypes from 'prop-types';

import './CompButtonLight.scss';

/**
 * Light effect button component
 *
 * @component React component
 * @param {Object} props children, style, onClick, neonSize
 * @param {any} props.children any.
 * @param {Object} props.style object.
 * @param {Function} props.onClick function. required.
 * @param {String} props.neonSize string.
 * @returns {JSX.Element} Light effect button component
 *
 * @example
 * //Default Values
 * <CompButtonLight style={{style: style}} onClick={function} neonSize="2px">
 *   null
 * </CompButtonLight>
 */
function CompButtonLight({ children, style, onClick, neonSize }) {
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
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  neonSize: PropTypes.string,
};
CompButtonLight.defaultProps = {
  children: null,
  style: null,
  neonSize: '2px',
};

export default CompButtonLight;
