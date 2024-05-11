import React from 'react';
import PropTypes from 'prop-types';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './ButtonMain.scss';

/**
 *
 * @returns ButtonMain
 */
function ButtonMain({ onClick, state }) {
  return (
    <div className={`ButtonMain ${!state.state ? 'off' : ''}`}>
      <CompButtonLight style={{ padding: '20px 30px' }} onClick={onClick}>
        <CompFontNeon neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
          {state.content}
        </CompFontNeon>
      </CompButtonLight>
    </div>
  );
}
ButtonMain.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.shape({
    state: PropTypes.bool, // true: on(visible), false: off(invisible)
    content: PropTypes.string,
  }).isRequired,
};
ButtonMain.defaultProps = {};

export default ButtonMain;
