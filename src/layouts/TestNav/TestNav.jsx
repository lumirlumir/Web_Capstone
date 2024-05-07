import React from 'react';
import { Link } from 'react-router-dom';

import URL from '@/constants';

import './TestNav.scss';

/**
 *
 * @returns TestNav
 */
function TestNav() {
  return (
    <div className="TestNav">
      TEST
      <br />
      <Link to={URL.start}>start</Link>
      <br />
      <Link to={URL.interview}>interview</Link>
      <br />
      <Link to={URL.result}>result</Link>
    </div>
  );
}

export default TestNav;
