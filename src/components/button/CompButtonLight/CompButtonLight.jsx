import React from 'react';
import PropTypes from 'prop-types';

import './CompButtonLight.scss';

/**
 * Light effect button component
 *
 * @component React component
 * @param {Object} props children, onClick
 * @param {Element} props.children element
 * @param {Function} props.onClick function
 *
 * @example
 * //Render a Button component with light effects
 * Example
 */
function CompButtonLight({ children, onClick }) {
  return (
    <div className="CompButtonLight">
      <span />
      <span />
      <span />
      <span />
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
CompButtonLight.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CompButtonLight;
