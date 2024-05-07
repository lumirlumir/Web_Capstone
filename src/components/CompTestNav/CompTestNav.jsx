import React from 'react';
import { Link } from 'react-router-dom';

import './CompTestNav.scss';

/**
 *
 * @returns CompTestNav
 */
function CompTestNav() {
  return (
    <div className="CompTestNav">
      TEST
      <br />
      <Link to={`${process.env.PUBLIC_URL}/`}>start</Link>
      <br />
      <Link to={`${process.env.PUBLIC_URL}/interview`}>interview</Link>
      <br />
      <Link to={`${process.env.PUBLIC_URL}/result`}>result</Link>
    </div>
  );
}

export default CompTestNav;
