import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

/**
 *
 * @returns Nav
 */
function Nav() {
  return (
    <div className="Nav">
      TEST
      <br />
      <Link to="/">Start</Link>
      <br />
      <Link to="/Interview">Interview</Link>
      <br />
      <Link to="/Result">Result</Link>
    </div>
  );
}

export default Nav;
