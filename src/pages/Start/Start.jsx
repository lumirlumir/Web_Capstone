import React from 'react';

import HeaderR from './HeaderR';
import HeaderL from './HeaderL';
import Main from './Main';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  return (
    <div className="Start">
      <HeaderR />
      <HeaderL />
      <Main />
    </div>
  );
}

export default Start;
