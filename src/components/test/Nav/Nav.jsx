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
      <Link to={`${process.env.PUBLIC_URL}/start`}>start</Link>
      <br />
      <Link to={`${process.env.PUBLIC_URL}/interview`}>interview</Link>
      <br />
      <Link to={`${process.env.PUBLIC_URL}/result`}>result</Link>
    </div>
  );
}

export default Nav;
